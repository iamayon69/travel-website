
import { navOptions } from "../utils/navConfig";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-12 h-20 font-volkhov">
      {/* Logo */}
      <div className="font-bold text-[2rem] text-[#212832] tracking-tight">Pack&amp;Go</div>
      {/* Nav options */}
      <div className="flex items-center gap-12">
        {navOptions.map((option) => (
          <span
            key={option}
            className="text-[17px] font-medium text-[#212832] cursor-pointer"
          >
            {option}
          </span>
        ))}
        {/* Sign up button */}
        <button
          className="text-[17px] font-medium text-[#212832] border border-[#212832] rounded-lg px-6 py-2 ml-6 cursor-pointer bg-transparent"
        >
          Sign up
        </button>
        {/* EN dropdown */}
        <div className="text-[17px] font-medium text-[#212832] flex items-center ml-6 cursor-pointer gap-1">
          EN
          <span className="text-xs">▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;