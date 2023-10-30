import { Injectable } from '@nestjs/common';
import * as QRCode from 'QRCode';
import * as sharp from 'sharp';
import * as fs from 'fs';
import { join } from 'path';


@Injectable()
export class QrCodeService {
    private cropCenter = async (imageBuffer, cropWidth, cropHeight) => {
        return sharp(imageBuffer)
            .metadata()
            .then(({ width, height }) => {
                const left = (width - cropWidth) / 2;
                const top = (height - cropHeight) / 2;

                return sharp(imageBuffer)
                    .extract({ left: Math.round(left), top: Math.round(top), width: cropWidth, height: cropHeight })
                    .toBuffer();
            });
    };

    generateQrCode = async (qrCode: string) => {
        const filePath = join(__dirname, '../../src/qr-code/back_img.png');
        const back_img = fs.readFileSync(filePath);

        const qr_img = await QRCode.toBuffer(qrCode, { width: 580, height: 580 });
        const cropped_qr_img = await this.cropCenter(qr_img, 500, 500);

        const final_img = await sharp(back_img)
            .composite([{ input: cropped_qr_img, top: 680, left: 290 }])
            .toBuffer();

        // return final_img.toString('base64');
        return final_img;
    };
}
