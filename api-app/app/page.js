"use client"
import Image from "next/image";
import { useState,useEffect } from "react";

export default function Home() {
  const [username, setuserName] = useState()
  const [password, setpassword] = useState()
  const [email, setemail] = useState()

  const handlechange = async () => {
    const res = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email
      }),
    });
    const data = await res.json();
    console.log(data);
  }
  
  return (
    <div className="w-full h-25 flex flex-col items-center justify-center p-5">
        <input type="text" name="userName" id="userName" value={username} onChange={(e) => setuserName(e.target.value)} className="border-2 border-amber-700"/>
        <input type="text" name="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} className="border-2 border-amber-700"/>
        <input type="text" name="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} className="border-2 border-amber-700"/>
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handlechange()}>submit</button>
    </div>
  );
}
