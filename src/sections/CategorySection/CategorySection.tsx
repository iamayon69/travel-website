import React from 'react'
import CategoryCard from './components/CategoryCard'
import categories from '@/utils/categoryConfig'

const CategorySection = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-lg text-center font-semibold text-text-primary mb-2'>CATEGORY</h1>
        <h2 className='font-volkhov text-[50px] font-bold text-header-primary text-center mb-[68px]'>We Offer The Best Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((c) => (
            <CategoryCard key={c.id} image={c.image} title={c.title} description={c.description} />
          ))}
        </div>
    </div>
  )
}

export default CategorySection