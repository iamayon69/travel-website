"use client"
import React, { useState } from 'react'
import DestinationCard from './components/DestinationCard'
import destinations from '@/utils/destinationConfig'

const DestinationSection = () => {
  const [activeIndex, setActiveIndex] = useState(1) // second card active by default

  return (
    <div className="mt-30">
      <h1 className="text-lg text-center font-semibold text-text-primary mb-2">DESTINATIONS</h1>
      <h2 className="font-volkhov text-[50px] font-bold text-header-primary text-center mb-[68px]">
        Top Destinations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((d, i) => (
          <DestinationCard
            key={d.id}
            {...d}
            active={i === activeIndex}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default DestinationSection
