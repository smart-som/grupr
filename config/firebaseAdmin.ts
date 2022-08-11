import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY
        ? Buffer.from(process.env.FIREBASE_PRIVATE_KEY).toString()
        : undefined,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: "grupr-b9d32",
    }),
    databaseURL: "https://grupr-default-rtdb.firebaseio.com",
  });
}

export { firebaseAdmin };
