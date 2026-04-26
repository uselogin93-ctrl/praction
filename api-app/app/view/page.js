"use client";
import React, { useState, useEffect } from "react";

const View = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/user");
        const data = await res.json();
        
        if (data.success) {
          setUsers(data.data);
        } else {
          setError(data.message || "Failed to fetch users");
        }
      } catch (err) {
        setError("Error connecting to the server");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
            User Directory
          </h1>
          <p className="text-slate-400">Manage and view all registered users in the database</p>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-slate-400 animate-pulse">Loading users from MongoDB...</p>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl text-center">
            <p className="text-red-400 font-medium mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-bold transition-all"
            >
              Retry Connection
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {users.length === 0 ? (
              <div className="bg-slate-800/50 border border-slate-700 p-12 rounded-2xl text-center">
                <p className="text-slate-400">No users found in the database.</p>
              </div>
            ) : (
              users.map((user) => (
                <div 
                  key={user._id} 
                  className="bg-slate-800 border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-all group shadow-xl"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-xl font-bold">
                        {user.username?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                          {user.username}
                        </h2>
                        <p className="text-slate-400 text-sm">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Joined On</p>
                      <p className="text-sm font-medium text-slate-300">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Unknown"}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span>←</span> Back to Registration
          </a>
        </div>
      </div>
    </div>
  );
};

export default View;