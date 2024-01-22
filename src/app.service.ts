import { Injectable } from '@nestjs/common';
const nodemailer = require('nodemailer');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async fromSubmit(details: any): Promise<any> {
    console.log(process.env.USER_EMAIL, process.env.USER_EMAIL_KEY);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_KEY,
      },
    });

    //     // send mail to the user
    await transporter.sendMail(
      {
        from: 'royhiark@gmail.com', // sender address
        to: details.email, // list of receivers
        subject: 'Personal Details Request. confirmation mail', // Subject line
        text: ` confirmation mail`, // plain text body
        html: `
            <!doctype html>
      <head>
        <style>
          * {
            padding: 0;
            margin: 0;
            box-sizing: 0;
          }
          .IconContainerr {
            width: 85px;
            height: 25px;
            font-weight: 700;
          }
          .IconContainerr::after{
            content: ":";
          }
          .svgIcon {
            width: 100%;
            height: 100%;
          }
          section {
            padding: 20px 0;
          }
          section a {
            display: flex;
            gap: 5px;
            padding: 4px;
            text-decoration: none;
          }
          section a :hover {
            text-decoration: underline;
            color: blue;
          }
          .linkedAndGithub {
            display: flex;
            flex-direction: row;
            padding: 10px 0;
          }
          p.textMessege {
            text-indent: 30px;
          }
        </style>
      </head>
      <body style="font-family: system-ui, math, sans-serif">
        <div>
          <h4>Dear ${details.name},</h4>
          <p class="textMessege">
            Thank you for reaching out and expressing interest in my profile. I
            appreciate your curiosity! Below are my contact details. I have received
            your message, and I will get back to you as soon as possible.
          </p>
          <section>
            <a
              href="mailto:hirakroy@mail.com"
              class="contactDetailsLinkTagContainer"
            >
              <span class="IconContainerr">
               Email
              </span>
              <span>hirakroy@mail.com</span>
            </a>
    <br/>
            <a
              href="whatsapp://send?phone=+919002297603"
              class="contactDetailsLinkTagContainer"
            >
              <span class="IconContainerr">
                whatsapp
              </span>
              <span>+91-9002297603</span>
            </a>
            <br/>

            <a
              href="skype:live:royhirakp?call"
              class="contactDetailsLinkTagContainer"
            >
              <span class="IconContainerr" >
                skype
              </span>
              <span>live:royhirakp</span>
            </a>
    <br/>

            <a
            target="_blank"
            href="https://www.linkedin.com/in/royhirakp/"
            >
              <span class="IconContainerr" style="position: relative">
                linkedin
              </span>
              <span>www.linkedin.com/in/royhirakp</span>
            </a>
    <br/>

          </section>
          <p class="textMessege">
            Feel free to reach out to me via email or phone. If you prefer a Skype
            call, please add me on Skype using the provided username. I'm excited
            about the possibility of connecting with you and discussing any
            potential collaboration. If you have any further questions or if there's
            anything specific you'd like to know, please don't hesitate to ask.
            Thank you once again for your interest, and I look forward to hearing
            from you soon!
          </p>
          <br />

          <p>
            Best regards,
            <br />
            Hirak Roy
            <br />
          </p>
        </div>
      </body>
    </html>
            `,
      },

      (error, info) => {
        if (error) {
          console.log(error);
          return {
            status: false,
            error,
          };
        } else {
          return {
            status: true,
            msg: 'eamil send susecfull',
          };
        }
      },
    );
    // send the user detaile to me
    await transporter.sendMail(
      {
        from: 'royhiark@gmail.com', // sender address
        to: 'hirakroy@mail.com', // list of receivers
        subject: 'some one visited my profile ',
        text: ` confirmation mail`, // plain text body
        html: ` <body style="font-family: system-ui, math, sans-serif">
            <div>
              kono user from fill koreche :
              <br />

              name : ${details.name}
              <br />
              email: ${details.email}
              <br />
              message: ${details.message}
            </div>
          </body>`, // html body
      },

      (error, info) => {
        if (error) {
          console.log(error);
          return {
            status: false,
            error,
          };
        } else {
          return {
            status: true,
            msg: 'eamil send susecfull',
          };
        }
      },
    );
    return {
      success: true,
    };
  }
}
