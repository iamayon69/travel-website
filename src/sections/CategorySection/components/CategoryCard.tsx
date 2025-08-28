import React, { useState } from 'react'

type Props = {
  image: string
  title: string
  description: string
}

const CategoryCard: React.FC<Props> = ({ image, title, description }) => {
  const [active, setActive] = useState(false)

  const toggleActive = () => setActive((v) => !v)

  const outerClasses = [
    'flex flex-col items-center text-center p-6',
    active ? 'shadow-sm rounded-[36px]' : 'rounded-lg',
  ].join(' ')

  return (
    <div
      className={outerClasses}
      role="button"
      tabIndex={0}
      aria-pressed={active}
      onClick={toggleActive}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggleActive()
        }
      }}
    >
      <img src={image} alt={title} className="w-20 h-20 mb-4 object-contain" />
      <h3 className="font-semibold text-xl mb-2 text-header-primary">{title}</h3>
      <p className="text-base font-medium leading-[26px] text-text-primary">{description}</p>
    </div>
  )
}

export default CategoryCard