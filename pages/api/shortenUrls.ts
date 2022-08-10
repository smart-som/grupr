import type { NextApiRequest, NextApiResponse } from "next";
import { customAlphabet } from "nanoid";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  // generate a random id for the grup
  if (req.method == "POST") {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const getHash = customAlphabet(characters, 6);
    const grupId = getHash();

    //  save to db

    res
      .status(200)
      .json({ code: 200, grupUrl: `https://www.grupr.nl/${grupId} ` });
  }

  //   if api request is a not post request
  return res.status(405).json({
    type: "Error",
    code: 405,
    message: "Only POST method is accepted on this route",
  });
}
