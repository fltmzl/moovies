"use client";

import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./Brand";

const NavbarItem = ({ href, text }: { href: string; text: string }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`nav-link ${pathname === href && "text-white"}`}>
      {text}
    </Link>
  );
};

const Navbar = () => {
  const { scrollY } = useScroll();

  return (
    <nav className={`w-full flex-y-center fixed top-0 px-10 z-50 transition-all duration-300 ${scrollY > 100 && "bg-slate-900"}`}>
      <Brand />

      <ul className={`flex-y-center justify-center flex-1 gap-5 text-gray-400`}>
        <li>
          <NavbarItem href="/" text="Home" />
        </li>
        <li>
          <NavbarItem href="/movies" text="Movies" />
        </li>
        <li>
          <NavbarItem href="/" text="Series" />
        </li>
        <li>
          <NavbarItem href="/" text="TV Shows" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
