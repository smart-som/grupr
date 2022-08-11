// import { setAuthCookies } from "next-firebase-auth";
// import initAuth from "../../helpers/initAuth"; // the module you created above
import type { NextApiRequest, NextApiResponse } from "next";

// initAuth();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     await setAuthCookies(req, res);
//   } catch (e) {
//     return res.status(500).json({ error: "Unexpected error." });
//   }
//   return res.status(200).json({ success: true });
// }

import { setAuthCookies } from "next-firebase-auth";
import initAuth from "../../helpers/initAuth";

initAuth();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await setAuthCookies(req, res);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(500).json({ error: "Unexpected error." });
  }
  return res.status(200).json({ status: true });
};

export default handler;
