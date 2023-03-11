"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarItem = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => {
  const pathname = usePathname();

  return (
    <>
      <Link href={href} className={`text-gray-500 flex-y-center gap-2 pl-4 group border-l-4 border-transparent ${pathname?.includes(href) && "sidebar-link-active"}`}>
        <div className={`group-hover:text-blue-400 ${pathname === href && "text-blue-400"}`}>{icon}</div>
        <div>{text}</div>
      </Link>
    </>
  );
};

export default SideBarItem;
