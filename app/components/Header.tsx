"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 mb-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MarketSense AI
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
