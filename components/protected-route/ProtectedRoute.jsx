"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // useRouter for programmatic navigation
import { useUser } from "@/context/UserContext"; // To get the user context

export default function ProtectedRoute({ children }) {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // If no user is logged in, redirect to login page
      router.push("/");
    }
  }, [user, router]);

  // If user is logged in, show the children components (i.e., the protected page)
  if (!user) {
    return null; // You can also return a loading spinner while checking the auth state
  }

  return children;
}
