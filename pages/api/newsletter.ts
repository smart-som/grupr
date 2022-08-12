import type { NextApiRequest, NextApiResponse } from "next";
import logo from "../../images/logo.png";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // function sendEmail() {
  if (req.method == "POST") {
    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
      host: "mail.shodexgarden.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "no-reply@shodexgarden.com",
        pass: "bHthutzvz%DQ",
      },
      tls: {
        rejectUnauthorized: false, //set to true in production
      },
    });

    let mailOptions = {
      from: '"Shodex Garden" <newsletter@grupr.com>', // sender address
      to: ["chinnaji306@gmail.com", "chibuikennaji306@gmail.com"], // list of receivers
      subject: "Thank you for subscribing", // Subject line
      text: "Shodex Garden - Ticket Purhase?", // plain text body
      html: `<main >
      <div>
        <img src="${logo}" alt="Grupr logo" />
        <div>
        <h1>Thank You For Signing up to our Newsletter</h1>
        <p> We will keep you updated with the latest news and features</p>
        <p>Oh by the way, I wouldn't mind if you give us some love, follow the creator <a href="https://twitter.com/chinnaji"> Twitter</a>  :-)</p>
        
      </main> `,
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.log(error);
        res.status(400).json(error);
      } else {
        console.log(info);
        res.status(200).json(info);
        // fullResponse.push({ nodemaileErr: "success" });
      }
    });
  }

  //   if api request is a not post request
  return res.status(405).json({
    type: "Error",
    code: 405,
    message: "Only POST method is accepted on this route",
  });
  //   }

  // for (let i = 0; i < 2; i++) {
  //   sendEmail();
  // }
}
