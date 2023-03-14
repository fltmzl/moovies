"use client";

import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import Brand from "./Brand";

const navbars = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Movies",
    href: "/movies",
  },
  {
    text: "Series",
    href: "/",
  },
  {
    text: "TV Shows",
    href: "/",
  },
];

const NavbarItem = ({ href, text }: { href: string; text: string }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`nav-link ${pathname === href && "text-white"}`}>
      {text}
    </Link>
  );
};

const NavbarItemMobile = ({ href, text }: { href: string; text: string }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`nav-link px-5 py-2 block hover:bg-slate-700 ${pathname === href && "text-white"}`}>
      {text}
    </Link>
  );
};

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className={`container-base w-full flex-y-center justify-between lg:justify-center fixed top-0 z-50 transition-all duration-300 ${scrollY > 10 && "bg-slate-900"}`}>
      <Brand />

      <ul className={`hidden md:flex-center flex-1 gap-5 text-gray-300`}>
        {navbars.map((navbar, index) => (
          <li key={`desktop-${index}`}>
            <NavbarItem href={navbar.href} text={navbar.text} />
          </li>
        ))}
      </ul>

      <div className="block md:hidden relative" ref={dropdownRef}>
        <HiMenu onClick={toggleDropdown} className="text-xl" />
        {isDropdownOpen && (
          <div className="min-w-max bg-slate-800 shadow-2xl absolute top-full right-0 rounded-xl overflow-hidden">
            {navbars.map((navbar, index) => (
              <NavbarItemMobile key={`mobile-${index}`} href={navbar.href} text={navbar.text} />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
