
// import { collection, addDoc, where, query, getDocs, getDoc, doc} from "firebase/firestore";
// import db from "./config";

// const USER_COLLECTION = 'usuarios';

// export async function userExistsByEmail(email) {
//   return !!getUser(email);
// }

// export async function createUser(props) {
//   if (await userExistsByEmail(props.email)) return false;
//   const docRef = await addDoc(collection(db, USER_COLLECTION), props);
//   return true;
// }

// export async function getUser(email) {
//   const q = query(collection(db, USER_COLLECTION), where('email', '==', email));
//   const queryResult = await getDocs(q);
//   if (queryResult.size !== 0) return;
//   const user = queryResult.docs[0];
//   return {
//     id: user.id,
//     ...user.data()
//   }
// }

