"use client"
import Image from "next/image";
import { useState,useEffect } from "react";

export default function Home() {
  const [username, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handlechange = async () => {
    if (!username || !password || !email) {
      setStatus("Please fill all fields");
      return;
    }

    setLoading(true);
    setStatus("Connecting to database...");

    try {
      const res = await fetch("/api/user", {
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
      
      if (data.success) {
        setStatus("Success! User added to MongoDB.");
        setuserName("");
        setpassword("");
        setemail("");
      } else {
        setStatus("Error: " + data.message);
      }
    } catch (error) {
      setStatus("Error connecting to API");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-5 text-white">
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-slate-700">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          MongoDB Connection
        </h1>
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-400">Username</label>
            <input 
              type="text" 
              placeholder="Enter username"
              value={username} 
              onChange={(e) => setuserName(e.target.value)} 
              className="bg-slate-700 border border-slate-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-400">Password</label>
            <input 
              type="password" 
              placeholder="Enter password"
              value={password} 
              onChange={(e) => setpassword(e.target.value)} 
              className="bg-slate-700 border border-slate-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-400">Email</label>
            <input 
              type="email" 
              placeholder="Enter email"
              value={email} 
              onChange={(e) => setemail(e.target.value)} 
              className="bg-slate-700 border border-slate-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <button 
            disabled={loading}
            className={`mt-4 py-3 px-4 rounded-lg font-bold transition-all ${
              loading 
                ? "bg-slate-600 cursor-not-allowed" 
                : "bg-blue-500 hover:bg-blue-600 active:scale-95 shadow-lg shadow-blue-500/20"
            }`}
            onClick={handlechange}
          >
            {loading ? "Submitting..." : "Submit to MongoDB"}
          </button>

          {status && (
            <p className={`text-center mt-4 p-3 rounded-lg text-sm ${
              status.includes("Success") ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
            }`}>
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

