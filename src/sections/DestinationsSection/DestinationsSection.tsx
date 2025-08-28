"use client"
import React, { useState } from 'react'
import DestinationCard from './components/DestinationCard'
import destinations from '@/utils/destinationConfig'
import Image from 'next/image'

const DestinationSection = () => {
  const [activeIndex, setActiveIndex] = useState(1) // second card active by default

  return (
    <div className="mt-30">
      <h1 className="text-lg text-center font-semibold text-text-primary mb-2 font-poppins">DESTINATIONS</h1>
      <h2 className="text-[50px] font-bold font-volkhov text-header-primary text-center mb-[68px]">
        Top Destinations
      </h2>

      <div className="flex gap-x-16 justify-center font-poppins relative">
        {destinations.map((d, i) => (
          <DestinationCard
            key={d.id}
            {...d}
            active={i === activeIndex}
            onClick={() => setActiveIndex(i)}
          />
        ))}
        <div className='absolute bottom-12 right-[7.5%] z-10'>
            <Image width={96} height={252} src='/images/spring.svg' alt='spring' className="object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default DestinationSection
