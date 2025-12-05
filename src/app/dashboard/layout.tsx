"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getToken, logoutUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const token = getToken();

  // Redirect AFTER render, not during render
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  // While checking token, avoid rendering wrong content
  if (!token) {
    return null;
  }

  function handleLogout() {
    logoutUser();
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 to-blue-500 p-10">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="destructive" onClick={handleLogout}>Logout</Button>
      </header>
      {children}
    </div>
  );
}