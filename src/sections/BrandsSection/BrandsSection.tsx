import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const brandImages = [
  '/brandImages/1.svg',
  '/brandImages/2.svg',
  '/brandImages/3.svg',
  '/brandImages/4.svg',
  '/brandImages/5.svg',
]

const BrandsSection = () => {
  return (
    <section className="py-30">
      <div className="w-full px-4">
        <Marquee gradient={false} speed={50} pauseOnHover={true} loop={0}>
          {brandImages.map((src, idx) => (
            <div key={idx} className="mx-6 flex items-center justify-center">
              <Image
                src={src}
                alt={`brand-${idx + 1}`}
                width={300}
                height={200}
                className="object-contain w-[240px] h-[160px] filter grayscale"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default BrandsSection