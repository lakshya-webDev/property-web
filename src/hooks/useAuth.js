"use client"
import { auth } from "@/utils/firebase";
import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Subscribe to auth state changes
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return { user };
}