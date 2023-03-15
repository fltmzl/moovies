"use client";

import useDropdown from "@/hooks/useDropdown";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

interface SubNavbarItemProps {
  title: string;
  dropdown?: {
    text: string;
    link: string;
  }[];
}

const SubNavbarItem = ({ dropdown, title }: SubNavbarItemProps) => {
  const { dropdownRef, isDropdownOpen, toggleDropdown } = useDropdown<HTMLLIElement>();

  return (
    <li className="cursor-pointer relative" role="button" tabIndex={0} onClick={toggleDropdown} ref={dropdownRef}>
      <span className="flex-center gap-2">
        <span>{title}</span>
        {dropdown?.length && <MdKeyboardArrowDown className="text-wh" />}
      </span>

      {isDropdownOpen && (
        <div className="absolute top-full min-w-[100px] bg-white shadow-xl overflow-hidden rounded-lg z-20">
          <ul>
            {dropdown?.map((item) => (
              <li key={item.link}>
                <Link href={item.link} className="text-slate-900 px-4 py-2 divide-y divide-gray-500 hover:bg-gray-300 duration-300 block">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const SubNavbar = ({ movieId }: { movieId: number }) => {
  return (
    <div className="container-base flex-x-center text-sm md:text-base">
      <ul className="flex gap-7">
        <SubNavbarItem
          title="Overview"
          dropdown={[
            { text: "Main", link: `/movie/${movieId}` },
            { text: "Cast", link: `/movie/${movieId}/cast` },
          ]}
        />
        <SubNavbarItem
          title="Media"
          dropdown={[
            { text: "Backdrops", link: `/movie/${movieId}/images/backdrops` },
            { text: "Posters", link: `/movie/${movieId}/images/posters` },
            { text: "Logos", link: `/movie/${movieId}/images/logos` },
            { text: "Videos", link: `/movie/${movieId}/videos` },
          ]}
        />
        <Link href={`/movie/${movieId}/reviews?page=1`}>Reviews</Link>
      </ul>
    </div>
  );
};

export default SubNavbar;
