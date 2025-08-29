import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="mx-[140px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Left: Logo + Tagline */}
          <div className="md:col-span-1">
            <div className="text-[40px] font-extrabold text-header-primary tracking-tight">
              Pack<span className="text-[#f0a501]">&amp;</span>Go<span className="text-[#f0a501]">.</span>
            </div>
            <p className="mt-4 text-sm text-text-primary max-w-xs font-medium">
              Book your trip in minute, get full
              <br /> Control for much longer.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold text-[#0f1724] mb-4">Company</h3>
            <ul className="space-y-3 text-text-primary">
              <li>
                <a href="#" className="hover:text-[#f0a501] font-medium">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0a501] font-medium">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0a501] font-medium">Mobile</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold text-[#0f1724] mb-4">Contact</h3>
            <ul className="space-y-3 text-text-primary">
              <li>
                <a href="#" className="hover:text-[#f0a501] font-medium">Help/FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0a501] font-medium">Press</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0a501] font-medium">Affiliates</a>
              </li>
            </ul>
          </div>

          {/* More Column */}
          <div>
            <h3 className="text-lg font-bold text-[#0f1724] mb-4">More</h3>
            <ul className="space-y-3 text-text-primary">
              <li>
                <a href="#" className="hover:text-[#f0a501] font-medium">Airlinefees</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0a501] font-medium">Airline</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0a501] font-medium">Low fare tips</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer