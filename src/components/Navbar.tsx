
import { navOptions } from "../utils/navConfig";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between h-20 pt-12 px-[140px]">
      {/* Logo */}
      <div className="font-bold text-[40px] text-[#212832] tracking-tight">
        Pack<span className="text-[#f0a501]">&amp;</span>Go
      </div>
      {/* Nav options */}
      <div className="flex items-center gap-12">
        {navOptions.map((option) => (
          <span
            key={option}
            className="text-[17px] font-medium text-[#212832] cursor-pointer font-poppins"
          >
            {option}
          </span>
        ))}
        {/* Sign up button */}
        <button
          className="text-[17px] font-medium text-[#212832] border border-[#212832] rounded-lg px-6 py-2 ml-6 cursor-pointer bg-transparent font-poppins"
        >
          Sign up
        </button>
        {/* EN dropdown */}
        <div className="text-[17px] font-medium text-[#212832] flex items-center ml-6 cursor-pointer gap-1 font-poppins">
          EN
          <span className="text-xs">▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;