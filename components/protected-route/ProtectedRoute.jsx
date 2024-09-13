"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

export default function ProtectedRoute({ children }) {
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user === null) {
      setIsLoading(false); // Set loading to false when auth check is complete
    } else if (user) {
      setIsLoading(false); // Auth check complete, user is logged in
    } else {
      setIsLoading(true); // Still checking
    }
  }, [user]);

  useEffect(() => {
    if (!isLoading && !user) {
      // Only redirect if not loading and no user is found
      router.push("/");
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render children (protected page) only if the user is logged in
  return user ? children : null;
}
