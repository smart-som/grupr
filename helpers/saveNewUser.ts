import { db } from "../config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { TsignUserData } from "../types";

const saveNewUser = async (userData: TsignUserData) => {
  try {
    await addDoc(collection(db, "users"), {
      name: userData.name,
      email: userData.email,
      grups: [],
      created: Timestamp.now(),
    });
  } catch (err) {
    alert(err);
  }
};

export default saveNewUser;
