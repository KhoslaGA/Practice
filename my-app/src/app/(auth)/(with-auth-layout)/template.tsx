"use client";
import Link from "next/link";
// * used to create Active Links
import { usePathname } from "next/navigation";
import "../styles.css";
import { useState } from "react";

const navlinks = [
  { name: "login", href: "/login" },
  { name: "register", href: "/register" },
  { name: "forgot-password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  // * we have to do e.preventdefault() but we can rename layout.tsx as template.tsx and the job is done by Next js automatically
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input
          className="border-red-700"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navlinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}{" "}
          </Link>
        );
      })}
    </div>
  );
}
