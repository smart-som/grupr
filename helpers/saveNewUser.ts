import { db } from "../config";
import { setDoc, doc } from "firebase/firestore";
import { TsignUserData } from "../types";
import { getAdditionalUserInfo } from "firebase/auth";

const saveNewUser = async (userData: TsignUserData) => {
  const userStatus = getAdditionalUserInfo(userData.res);
  // store user info to db only if user is a new user
  if (userStatus?.isNewUser) {
    try {
      //  save user info to db and use user id as doc id
      await setDoc(doc(db, "userData", userData.uid), {
        // userId: userData.uid,
        name: userData.name,
        email: userData.email,
        created: Date.now(),
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export default saveNewUser;
