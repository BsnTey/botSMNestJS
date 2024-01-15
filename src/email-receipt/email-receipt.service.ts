import { Injectable } from '@nestjs/common';
import * as Imap from 'imap';
import { simpleParser } from 'mailparser';
import { promisify } from 'util';
const util = require('util');

@Injectable()
export class EmailReceiptService {
    private async searchRegex(bodys: Array<Buffer | undefined>): Promise<Array<string>> {
        const regex = /https:\/\/consumer\.1-ofd\.ru\/v1\?.*?t=\d+T\d+&s=\d+&fn=\d+&i=\d+&fp=\d+&n=1/g;

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
                    const getBoxes = promisify(mail.getBoxes.bind(mail));
                    const rawBoxes = await getBoxes();
                    const boxes = Object.keys(rawBoxes);

                    for (const box of boxes) {
                        const openBox = promisify(mail.openBox.bind(mail));
                        const simpleParserPromise = util.promisify(simpleParser);
                        await openBox(box, false);
                        const search = promisify(mail.search.bind(mail));
                        const nums = await search(['ALL']);
                        for (const num of nums) {
                            const fetch = mail.fetch(num, { bodies: 'TEXT' });
                            fetch.on('message', (msg) => {
                                msg.on('body', async (stream) => {
                                    try {
                                        const parsed = await simpleParserPromise(stream);
                                        bodys.push(parsed.text);
                                    } catch (error) {
                                        console.error(error);
                                    }
                                });
                            });

                            fetch.once('error', (error) => {
                                console.error('Fetch error:', error);
                            });

                            fetch.once('end', () => {});
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

            mail.once('end', () => {});

            mail.connect();
        });
    }
}
