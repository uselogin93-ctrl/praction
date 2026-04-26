import Image from "next/image";
import { useState,useEffect } from "react";

export default function Home() {
  const {username, setuserName}=useState()
  const {password, setpassword}=useState()
  const {email, setemail}=useState()
  return (
    <div>
        <input type="text" name="userName" id="userName" value={username}/>
        <input type="text" name="password" id="password" value={password}/>
        <input type="text" name="email" id="email" value={email}/>
        <button>submit</button>
    </div>
  );
}
