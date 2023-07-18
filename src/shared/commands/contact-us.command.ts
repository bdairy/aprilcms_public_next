export class ContactUs {
  name!: string;
  email!: string;
  message!: string;
  reCaptchaToken!: string;
  static fromForm(form: any): ContactUs {
    const command: ContactUs = {
      name: form.name,
      email: form.email,
      message: form.message,
      reCaptchaToken: form.recaptcha
    };
    return command;
  }
  constructor() {}
}
