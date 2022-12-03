import {app, database} from '../../firebase'
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useRouter();
  const auth = getAuth();

  const saveData = async (e) => {
    e.preventDefault();
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      
      // Save this user in firestore
      await setDoc(doc(database, "users", user.uid), {
        "email":email,                      
      })

      alert('user registered successfully');      
      setEmail('');
      setPassword('');
      
      } 
      catch (error) {
        console.log("Something went wrong with registration: " + error);
      }
  }

  return (
      <div className='flex items-center justify-center h-screen flex-col'>
        <form className='bg-gray-400 w-4/12 flex items-center justify-center flex-col gap-4 py-5 px-10'>
          <h2 className='font-bold text-xl '>Register</h2>
          <input 
            type="text" 
            placeholder='Enter Email' 
            className='w-full py-1 px-4 border-none outline-none' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            type="password" 
            placeholder='Enter Password' 
            className='w-full py-1 px-4 border-none outline-none' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button 
            type='submit'
            className='bg-blue-500 text-white w-full p-2 rounded-full'
            onClick={saveData}
          >Register</button>
          <p>
            Already have an account? 
            <Link href={'/auth/login'} className='text-blue-700'> Login</Link>
          </p>
        </form>

      </div>
  )
}

export default Register