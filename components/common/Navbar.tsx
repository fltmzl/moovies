"use client";

import useDropdown from "@/hooks/useDropdown";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    text: "TV Shows",
    href: "/tv",
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
  const { dropdownRef, isDropdownOpen, toggleDropdown } = useDropdown<HTMLDivElement>();

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
        <button onClick={toggleDropdown} className="text-xl">
          <HiMenu />
        </button>

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
