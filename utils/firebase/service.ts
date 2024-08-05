import app from "./init";
import bcrypt, { compare } from "bcrypt";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
  updateDoc,
} from "firebase/firestore";

const firestore = getFirestore(app);
export async function registerUser(data: any) {
  const checkEmail = await getDocs(
    query(collection(firestore, "users"), where("email", "==", data.email))
  );
  if (checkEmail.docs.length > 0)
    return {
      success: false,
      message: "Email sudah terdaftar!",
      statusCode: 401,
    };
  const checkUsername = await getDocs(
    query(
      collection(firestore, "users"),
      where("username", "==", data.username)
    )
  );
  if (checkUsername.docs.length > 0)
    return {
      success: false,
      message: "Username sudah terdaftar!",
      statusCode: 401,
    };
  if (data.password !== data.confirmPassword)
    return {
      success: false,
      message: "Password tidak sama!",
      statusCode: 401,
    };
  data.password = await bcrypt.hash(data.password, 10);
  await addDoc(collection(firestore, "users"), {
    username: data.username,
    email: data.email,
    password: data.password,
    cart:[],
  });
  return {
    success: true,
    statusCode: 200,
  };
}
export async function loginUser(data: any) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    password: doc.data().password,
    id: doc.id,
    ...doc.data(),
  }));
  if (user.length > 0) {
    const checkPassword = await compare(data.password, user[0].password);
    if (!checkPassword) {
      return {
        success: false,
        message: "Password tidak sesuai!",
        statusCode: 401,
      };
    }
    return { success: true, user };
  } else {
    return { success: false, message: "Email tidak sesuai!", statusCode: 401 };
  }
}

export async function updateCart(data: any) {
  const docRef = doc(firestore, "users", data.id);
  await updateDoc(docRef, {cart:data.cart});
  return {
    success: true,
    statusCode: 200,
  }
}
