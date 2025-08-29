import React from 'react'
import Image from 'next/image'
import { LuUsersRound, LuHeart } from "react-icons/lu";

const BookingCard: React.FC = () => {
  // Combined multi-layer shadow derived from the user's specs (percentages mapped to alpha)
  const boxShadow = `
    0px 100px 80px rgba(0,0,0,0.02),
    0px 65px 47px rgba(0,0,0,0.0151),
    0px 38.5px 25.5px rgba(0,0,0,0.0121),
    20px 13px 0px rgba(0,0,0,0.01),
    -8.15px 6.5px 0px rgba(0,0,0,0.0079),
    -1.85px 3.15px 0px rgba(0,0,0,0.0048)
  `

  return (
    <div className="w-full px-5 pt-5 pb-[30px] max-w-[370px] bg-white rounded-[26px] overflow-hidden" style={{ boxShadow }}>
      {/* Top image */}
      <div className="w-[320px] h-[160px] relative">
        <Image
          src="/images/bookingCardBg.svg"
          alt="Trip image"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className='mt-[26px]'>
        <h3 className="text-lg font-semibold text-header-primary mb-2">
          Trip To Greece
        </h3>

        <div className="text-sm text-[#84829A] font-medium mb-4">
          <span>14–29 June</span>
          <span className="mx-2">|</span>
          <span>by Robbin joseph</span>
        </div>

        {/* icon row */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <Image src="/icons/leaf.svg" alt="leaf" width={14} height={14} className="w-[14px] h-[14px]" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <Image src="/icons/map.svg" alt="map" width={14} height={14} className="w-[14px] h-[14px]" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <Image src="/icons/send.svg" alt="send" width={14} height={14} className="w-[14px] h-[14px]" />
          </div>
        </div>

        {/* bottom row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#84829A]">
           <LuUsersRound className="size-[18px] text-[#84829A]"/>
            <span className="text-sm">24 people going</span>
          </div>

          {/* heart icon */}
          <button>
           <LuHeart className="size-[18px] text-[#84829A]"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingCard