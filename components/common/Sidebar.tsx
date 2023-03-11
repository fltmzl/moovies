import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { FiCompass, FiSearch, FiSettings } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import Brand from "./Brand";
import SideBarItem from "./Sidebar.item";

const Sidebar = () => {
  return (
    <aside className="pl-10">
      <div className="flex-y-center my-5 mb-16">
        <Brand />
      </div>

      <div className="pr-5 divide-y divide-gray-500/30">
        <section className="pb-4">
          <div className="text-xs text-gray-500 mb-3">MENU</div>
          <ul className="space-y-4">
            <li>
              <SideBarItem href="/" icon={<BiHomeCircle />} text="Home" />
            </li>
            <li>
              <SideBarItem href="/discovery" icon={<FiCompass />} text="Discovery" />
            </li>
            <li>
              <SideBarItem href="/community" icon={<HiOutlineUser />} text="Community" />
            </li>
            <li>
              <SideBarItem href="/search" icon={<FiSearch />} text="Search" />
            </li>
          </ul>
        </section>
        <section className="pt-4">
          <ul className="space-y-4">
            <li>
              <SideBarItem href="/setting" icon={<FiSettings />} text="Setting" />
            </li>
          </ul>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
