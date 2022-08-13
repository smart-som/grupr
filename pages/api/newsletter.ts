import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../config";
import { addDoc, collection } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // function sendEmail() {
  if (req.method == "POST") {
    try {
      //  save user info to db and use user id as doc id
      await addDoc(collection(db, "newsletter"), {
        email: req.body.email,
        created: Date.now(),
      });
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(200).json({ success: false });

      //   console.log(err);
    }
  }

  //   if api request is a not post request
  else {
    return res.status(405).json({
      type: "Error",
      code: 302,
      message: "Only POST method is accepted on this route",
    });
  }
  //   }
}
