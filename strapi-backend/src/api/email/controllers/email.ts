import { Context } from 'koa';
import nodemailer from 'nodemailer';

export default {
  async sendEmail(ctx: Context) {
    const { fullName, email, contact, destination, budget, dayOrTerm } = ctx.request.body;

    // Create a transporter object using your email service's SMTP details
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io', // Replace with your SMTP provider details
      port: 587,
      auth: {
        user: 'your-smtp-username',
        pass: 'your-smtp-password',
      },
    });

    // Define email options
    const mailOptions = {
      from: '"TourDaddy" <your-email@example.com>',
      to: 'ayaaz@seo-company.io', // Your email to receive bookings
      subject: 'New Booking Request',
      text: `You have a new booking request from ${fullName}.\n
             Email: ${email}\n
             Contact: ${contact}\n
             Destination: ${destination}\n
             Budget: ${budget}\n
             Day/Term: ${dayOrTerm}`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      ctx.send({ message: 'Email sent successfully' });
    } catch (error) {
      ctx.send({ error: 'Email sending failed' });
    }
  },
};
