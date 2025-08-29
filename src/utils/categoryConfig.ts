export type CategoryItem = {
  id: string
  image: string
  title: string
  description: string
}

export const categories: CategoryItem[] = [
  {
    id: 'weather',
    image: '/categoryIcons/1.png',
    title: 'Calculated Weather',
    description:
      'Built Wicket longer admire do barton vanity itself do in it. Calculated Weather for better planning.',
  },
  {
    id: 'flights',
    image: '/categoryIcons/2.png',
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the. Find great flight deals.',
  },
  {
    id: 'events',
    image: '/categoryIcons/3.png',
    title: 'Local Events',
    description:
      'Barton vanity itself do in it. Preferred to men it engrossed listening. Discover nearby events.',
  },
  {
    id: 'customization',
    image: '/categoryIcons/4.png',
    title: 'Customization',
    description:
      'We deliver outsourced aviation services for military customers. Tailored solutions for your needs.',
  },
]

export default categories
