'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#d7f0e1] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              alt="website logo"
              width={96}
              height={48}
              priority
              src="/images/logo.webp"
              className="ml-2 md:ml-0 object-contain w-[73px] h-[36px] sm:w-[73px] sm:h-[36px] md:w-[96px] md:h-[48px]"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col gap-6 text-sm">
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col gap-6 text-sm">
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col gap-6 text-sm">
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Copyright Section */}
        
      </div>
      <p className="mt-4 md:mt-0 text-xs text-gray-400 text-center">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
    </footer>
  );
}
