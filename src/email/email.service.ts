import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from 'nodemailer';

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

  async sendSignUpMail(
    email: string,
    signupVerifyToken: string,
  ): Promise<void> {
    const baseUrl = process.env.BASE_URL;
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const mailOptions = {
      to: email,
      from: 'Greeny',
      sender: 'Greeny',
      subject: '테스트 가입 인증 메일',
      html: `<form action="${url}" method="POST">
    <button>가입확인</button>
        </form>
    `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
