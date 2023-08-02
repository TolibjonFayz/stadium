import { Injectable } from '@nestjs/common';
import { User } from '../users/models/user.model';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerservice: MailerService) {}

  async sendUserConfrmation(user: User): Promise<void> {
    const url = `${process.env.API_HOST}/api/users/activate/${user.activation_link}`;
    console.log(url);
    await this.mailerservice.sendMail({
      to: user.email,
      subject: 'Welcome to Stadium App! Confirm your Email!',
      template: './confirmation',
      context: {
        name: user.first_name,
        url,
      },
    });
  }
}
