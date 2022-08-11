import { db } from "../config";
import {
  collection,
  addDoc,
  Timestamp,
  updateDoc,
  setDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { TsignUserData } from "../types";
// import { getAdditionalUserInfo } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

const saveGrupsToDb = async (grupData: any) => {
  const { user } = useAuth();
  if (user) {
    console.log(user);
    // try {
    //   //  save user info to db and use user id as doc id
    //   const authedUserRef = doc(db, "users", grupData.id);

    //   // Atomically add a new region to the "regions" array field.
    //   await updateDoc(authedUserRef, {
    //     grups: arrayUnion({
    //       grupData,
    //     }),
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  }
};

export { saveGrupsToDb };
