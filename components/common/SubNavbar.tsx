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
  return (
    <li className="cursor-pointer relative group">
      <span className="flex-center gap-2">
        <span>{title}</span>
        {dropdown?.length && <MdKeyboardArrowDown className="text-wh" />}
      </span>

      <div className="hidden group-hover:block absolute top-full min-w-[100px] bg-white shadow-xl overflow-hidden rounded-lg z-20">
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
    </li>
  );
};

const SubNavbar = ({ movieId }: { movieId: number }) => {
  return (
    <div className="py-10 flex justify-center">
      <ul className="flex gap-7">
        <SubNavbarItem
          title="Overview"
          dropdown={[
            { text: "Main", link: `/movies/${movieId}` },
            { text: "Cast", link: `/movies/${movieId}/cast` },
          ]}
        />
        <SubNavbarItem
          title="Media"
          dropdown={[
            { text: "Backdrops", link: `/movies/${movieId}/images/backdrops` },
            { text: "Posters", link: `/movies/${movieId}/images/posters` },
            { text: "Logos", link: `/movies/${movieId}/images/logos` },
            { text: "Videos", link: `/movies/${movieId}/videos` },
          ]}
        />
        <Link href={`/movies/${movieId}/reviews?page=1`}>Reviews</Link>
      </ul>
    </div>
  );
};

export default SubNavbar;
