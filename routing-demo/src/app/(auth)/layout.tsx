"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <nav className="mb-6">
        <ul className="flex space-x-4">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`no-underline px-3 py-2 rounded transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-500 text-white font-semibold"
                      : "text-blue-500 hover:bg-blue-100"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        {children}
      </div>
    </div>
  );
}
