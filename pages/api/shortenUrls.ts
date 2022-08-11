import type { NextApiRequest, NextApiResponse } from "next";
import { customAlphabet } from "nanoid";
import { db } from "../../config";
import { Timestamp, setDoc, doc } from "firebase/firestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  // generate a random id for the grup
  if (req.method == "POST") {
    // if (req.body.destinations.length! > 8) {
    //   return res.status(405).json({
    //     type: "Error",
    //     code: 405,
    //     message: "Invalid URL, cannot shorten",
    //   });
    // }
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    const getHash = customAlphabet(characters, 6);
    const grupId = getHash();

    //  save to db
    const result = {
      // code: 200,
      grupId,
      fullUrl: `https://www.grupr.nl/${grupId} `,
      dateCreated: new Date().toISOString(),
      createdBy: req.body.createdBy,
      destinations: req.body.destinations,
      title: req.body.title,
    };
    /*/ **********************/

    try {
      //  save user info to db and use user id as doc id
      await setDoc(doc(db, "grups", grupId), result);
    } catch (err) {
      console.log(err);
    }

    console.log(result);
    return res.status(200).json(result);
  }

  //   if api request is a not post request
  return res.status(405).json({
    type: "Error",
    code: 405,
    message: "Only POST method is accepted on this route",
  });
}
