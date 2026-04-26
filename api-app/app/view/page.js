"use client"
import React from 'react'
import { useState, useEffect } from "react";

const View = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/api/user');
            const data = await response.json();
            if (data.success) {
                setUser(data.data);
            }
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