import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendMail(email: string, text: string): Promise<void> {
    const baseUrl = process.env.BASE_URL;

    const mailOptions: MailOptions = {
      to: email,
      subject: 'Greeny에서 보낸 메일입니다',
      text,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
