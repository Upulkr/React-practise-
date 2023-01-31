import React, {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function GoogleAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      toast.success("Sign-Up was success!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
      console.log(error);
    }
  }
  return (
    <div>
      <button
        type='button'
        onClick={onGoogleClick}
        className='flex items -center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:first:bg-red-900 shadow-md hover:shadow-lg active :shadow-lg transition duration-150 ease-in-out rounded'
      >
        <FcGoogle className='text-2xl bg-white rounded-full mr-2'></FcGoogle>
        Continue with Google
      </button>
    </div>
  );
}
