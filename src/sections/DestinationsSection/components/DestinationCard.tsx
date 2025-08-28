"use client"
import React from 'react'
import type { Destination } from '@/utils/destinationConfig'

type Props = Destination & {
  active?: boolean
  onClick?: () => void
}

const DestinationCard: React.FC<Props> = ({ image, location, price, days, active, onClick }) => {
  return (
    <div
      className={`bg-white rounded-[18px] overflow-hidden shadow-sm cursor-pointer transition-transform duration-300 ${
        active ? 'scale-105 shadow-lg' : ''
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick?.()
      }}
    >
      <div className="h-44 w-full overflow-hidden">
        <img src={image} alt={location} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold text-header-primary">{location}</h4>
          <p className="text-sm text-text-primary mt-2 flex items-center gap-2">{days}</p>
        </div>
        <div className="text-lg font-bold text-header-primary">{price}</div>
      </div>
    </div>
  )
}

export default DestinationCard