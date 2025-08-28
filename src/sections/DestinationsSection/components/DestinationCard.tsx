"use client"
import React from 'react'
import Image from 'next/image'
import type { Destination } from '@/utils/destinationConfig'

type Props = Destination & {
  active?: boolean
  onClick?: () => void
}

const DestinationCard: React.FC<Props> = ({ image, location, price, days, active, onClick }) => {
  return (
    <div
      className={`bg-white relative z-20 w-[315px] rounded-[18px] overflow-hidden shadow-sm cursor-pointer transition-transform duration-300 font-poppins ${
        active ? 'scale-105 shadow-lg' : ''
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick?.()
      }}
    >
      <div className="h-[327px] w-full overflow-hidden relative">
        <Image src={image} alt={location} className="object-cover" fill unoptimized />
      </div>
      <div className="px-5 pt-[27px] pb-10 flex items-start justify-between">
        <div>
          <h4 className="text-lg font-medium text-text-primary">{location}</h4>
         <div className='flex gap-x-[8px] items-center justify-center'>
            <Image src="/icons/arrowIcon.png" alt="days icon" className='size-4' width={20} height={20} />
             <span className="text-base font-medium text-text-primary">{days}</span>
         </div>
        </div>
        <div className="text-lg font-medium text-text-primary">{price}</div>
      </div>
    </div>
  )
}

export default DestinationCard