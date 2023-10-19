import { Injectable } from '@nestjs/common';
const fs = require('fs');
import { join } from 'path';
import { IProxyDict } from '../common/interfaces/some.interface';

@Injectable()
export class ProxyService {
    public proxyList: string[];
    public proxyDict: IProxyDict = {};

    constructor() {
        const filePath = join(__dirname, '../../proxy.txt');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            const dataAcc = data.split('\n');
            const proxyList = [];
            for (let proxy of dataAcc) {
                if (proxy.length == 0) continue;
                proxyList.push(proxy.trim());
            }

            this.proxyList = proxyList;

            this.proxyList.forEach((line) => {
                this.proxyDict[line] = {
                    isBan: false,
                    timeBlock: new Date(),
                };
            });
            // this.proxyDict["socks5://MEwluo:Ljeic0GMlo@45.81.137.82:5501"] = {
            //     isBan: true,
            //     timeBlock: new Date(),
            // }
            // this.proxyList.push("socks5://MEwluo:Ljeic0GMlo@45.81.137.82:5501")
            // let show
        });
    }

    getRandomProxy() {
        const currentTime = new Date();
        let proxyListCopy = [...this.proxyList];

        while (proxyListCopy.length > 0) {
            const randomIndex = Math.floor(Math.random() * proxyListCopy.length);
            const randomProxy = proxyListCopy[randomIndex];

            const proxyData = this.proxyDict[randomProxy];

            if (!proxyData.isBan) {
                // proxyListCopy.splice(randomIndex, 1);
                return randomProxy;
            } else if (proxyData.isBan && currentTime.getTime() - proxyData.timeBlock.getTime() > 10 * 60 * 1000) {
                proxyData.isBan = false;
                proxyData.timeBlock = new Date();
                // proxyListCopy.splice(randomIndex, 1);
                return randomProxy;
            }

            proxyListCopy.splice(randomIndex, 1);
        }

        throw new Error('No available proxy found');
    }

    setProxyBan(proxy: string) {
        this.proxyDict[proxy].isBan = true;
        this.proxyDict[proxy].timeBlock = new Date();
    }
}
