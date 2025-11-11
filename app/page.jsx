"use client"

import Image from "next/image";
import Slider from "./stress/Slider";
import { logout } from "./login/actions";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      Home page yay
      <button onClick={() => logout()}>
        logout
      </button>
    </div>
  );
}
