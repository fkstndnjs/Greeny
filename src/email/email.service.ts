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

  async sendSignUpMail(
    email: string,
    signupVerifyToken: string,
  ): Promise<{
    message: string;
  }> {
    const baseUrl = process.env.BASE_URL;
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const mailOptions: MailOptions = {
      to: email,
      subject: 'Greeny 가입 인증 메일',
      html: `<form action="${url}" method="POST">
    <button style="  background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;">가입확인</button>
        </form>
    `,
    };

    await this.transporter.sendMail(mailOptions);

    return { message: '가입 인증 메일이 전송되었습니다.' };
  }
}
