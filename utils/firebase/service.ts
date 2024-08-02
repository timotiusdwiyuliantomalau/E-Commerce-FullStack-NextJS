import app from "./init";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
const firestore = getFirestore(app);

export async function registerUser(data: any) {
  await addDoc(collection(firestore, "users"), data);
  return {
    success: true,
    message: "User berhasil ditambahkan!",
    statusCode:200,
  };
}
export async function loginUser(data: any) {
    const q=query(collection(firestore,"users"),where("email","==",data.email));
    const snapshot=await getDocs(q);
    const user=snapshot.docs.map((doc)=>(
      doc.data()
    ))
    if(user.length>0){
        if(user[0].password!==data.password){
            return false;
        }
       return user[0];
    }else{
        return false;
    }
}
