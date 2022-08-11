import { db } from "../config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { TsignUserData } from "../types";
import { getAdditionalUserInfo } from "firebase/auth";

const saveNewUser = async (userData: TsignUserData) => {
  const userStatus = getAdditionalUserInfo(userData.res);
  // store user info to db only if user is a new user
  if (userStatus?.isNewUser) {
    try {
      await addDoc(collection(db, "userData", userData.uid), {
        name: userData.name,
        email: userData.email,
        grups: [],
        created: Timestamp.now(),
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export default saveNewUser;
