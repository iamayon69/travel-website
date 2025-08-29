"use client";
import { navOptions } from "../utils/navConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname() || "/";

  const toPath = (option: string) =>
    option === "Home" ? "/" : `/${option.toLowerCase()}`;

  return (
    <nav className="w-full flex items-center justify-between h-20 pt-12 px-[140px]">
      {/* Logo */}
      <div className="text-[40px] font-extrabold text-header-primary tracking-tight">
        Pack<span className="text-[#f0a501]">&amp;</span>Go
        <span className="text-[#f0a501]">.</span>
      </div>
      {/* Nav options */}
      <div className="flex items-center gap-12">
        {navOptions.map((option) => {
          const path = toPath(option);
          const isActive =
            path === "/" ? pathname === "/" : pathname.startsWith(path);

          return (
            <Link
              key={option}
              href={path}
              className={`text-[17px] font-medium cursor-pointer font-poppins ${
                isActive ? "text-[#f0a501]" : "text-[#212832]"
              }`}
            >
              {option}
            </Link>
          );
        })}
        {/* Sign up button */}
        <button className="text-[17px] font-medium text-white bg-[#f0a501] rounded-lg px-6 py-2  cursor-pointer font-poppins">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
