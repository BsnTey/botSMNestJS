import { Injectable } from '@nestjs/common';
import * as Imap from 'imap';
import { simpleParser } from 'mailparser';
import { promisify } from 'util';

@Injectable()
export class EmailReceiptService {
    private async searchRegex(bodys: Array<Buffer | undefined>): Promise<Array<string>> {
        const regex = /https:\/\/consumer\.1-ofd\.ru\/[\w\W]*?(?=\"\ target=\"_)/;
        const cashReceipt: string[] = [];
        for (const body of bodys) {
            try {
                const textBody: string = body.toString('utf-8');
                const reciept = textBody.match(regex);
                if (reciept) {
                    cashReceipt.push(reciept[0]);
                }
            } catch {
                // Handle the exception
            }
        }
        return cashReceipt;
    }

    public async findEmailCashReceipt(email: string, passImap: string): Promise<Array<string>> {
        return new Promise((resolve, reject) => {
            const imapServer = 'imap.mail.ru';
            const mail = new Imap({
                user: email,
                password: passImap,
                host: imapServer,
                port: 993,
                tls: true,
            });

            const bodys: Array<Buffer | undefined> = [];

            mail.once('ready', async () => {
                try {
                    for (const box of ['INBOX', 'INBOX/Social', 'INBOX/Newsletters', 'INBOX/ToMyself', 'INBOX/News', 'INBOX/Receipts']) {
                        const openBox = promisify(mail.openBox.bind(mail));
                        await openBox(box, false);
                        const search = promisify(mail.search.bind(mail));
                        const nums = await search(['ALL']);
                        for (const num of nums) {
                            const fetch = mail.fetch(num, { bodies: 'TEXT' });
                            for await (const message of fetch) {
                                const part = promisify(simpleParser);
                                const parsed = await part(message.body);
                                bodys.push(parsed.text);
                            }
                        }
                    }
                    const cashReceipt = await this.searchRegex(bodys);
                    mail.end();
                    resolve(cashReceipt);
                } catch (error) {
                    mail.end();
                    reject(error);
                }
            });

            mail.once('error', (err) => {
                reject(err);
            });

            mail.once('end', () => {
                console.log('Connection ended');
            });

            mail.connect();
        });
    }
}
