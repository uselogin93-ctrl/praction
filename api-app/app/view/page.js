"use client"
import React from 'react'
import { useState, useEffect } from "react";
import clientPromise from "@/lib/mongodb";

const View = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const client = await clientPromise;
            const db = client.db("myDatabase");
            const users = await db.collection("users").find({}).toArray();
            setUser(users);
        };
        fetchUser();
    }, []);
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-5 text-white">
        <h1>View</h1>
        <ul>
            {user.map((item) => (
                <li key={item._id}>{item.username}</li>
            ))}
        </ul>
    </div>  
  )
}

export default View