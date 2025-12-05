"use client";
import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { Button } from "@/components/ui/button";

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome({ children }: { children?: React.ReactNode }) {
  const token = getToken();
  let username = "Guest";

  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded.username) {
        username = decoded.username;
      }
    } catch (e) {
      console.error("Token decoding failed:", e);
    }
  }

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logout clicked");
  };

  return (
    <div className="p-5">

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center mt-10">

        {/* CARD 1 */}
        <div>
          <img
            src="/look.jpg"
            className="w-48 h-48 mx-auto rounded-xl shadow-md object-cover"
          />
          <h2 className="mt-3 font-bold text-xl text-white">Look Back</h2>
          <button className="mt-3 bg-white text-black font-medium py-2 px-6 rounded-full shadow">
            Read Now!
          </button>
        </div>

        {/* CARD 2 */}
        <div>
          <img
            src="/yourname.jpg"
            className="w-48 h-48 mx-auto rounded-xl shadow-md object-cover"
          />
          <h2 className="mt-3 font-bold text-xl text-white">Your Name</h2>
          <button className="mt-3 bg-white text-black font-medium py-2 px-6 rounded-full shadow">
            Read Now!
          </button>
        </div>

        {/* CARD 3 */}
        <div>
          <img
            src="/totoro.jpg"
            className="w-48 h-48 mx-auto rounded-xl shadow-md object-cover"
          />
          <h2 className="mt-3 font-bold text-xl text-white">Totoro</h2>
          <button className="mt-3 bg-white text-black font-medium py-2 px-6 rounded-full shadow">
            Read Now!
          </button>
        </div>

        {/* CARD 4 */}
        <div>
          <img
            src="/kikis.jpg"
            className="w-48 h-48 mx-auto rounded-xl shadow-md object-cover"
          />
          <h2 className="mt-3 font-bold text-xl text-white">Kiki’s Delivery Service</h2>
          <button className="mt-3 bg-white text-black font-medium py-2 px-6 rounded-full shadow">
            Read Now!
          </button>
        </div>

        {/* CARD 5 */}
        <div>
          <img
            src="/spirited.jpg"
            className="w-48 h-48 mx-auto rounded-xl shadow-md object-cover"
          />
          <h2 className="mt-3 font-bold text-xl text-white">Spirited Away</h2>
          <button className="mt-3 bg-white text-black font-medium py-2 px-6 rounded-full shadow">
            Read Now!
          </button>
        </div>

        {/* CARD 6 */}
        <div>
          <img
            src="/from.jpg"
            className="w-48 h-48 mx-auto rounded-xl shadow-md object-cover"
          />
          <h2 className="mt-3 font-bold text-xl text-white">From Up On Poppy Hill</h2>
          <button className="mt-3 bg-white text-black font-medium py-2 px-6 rounded-full shadow">
            Read Now!
          </button>
        </div>
      </div>

      {/* Children content */}
      <div className="mt-10">{children}</div>
    </div>
  );
}