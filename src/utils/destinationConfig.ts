export type Destination = {
  id: string
  image: string
  location: string
  price: string
  days: string
}

// Using Unsplash source URLs (randomized) for placeholder images
export const destinations: Destination[] = [
  {
    id: 'rome',
    image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80',
    location: 'Rome, Italy',
    price: '$3.9k',
    days: '7 Days Trip',
  },
  {
    id: 'london',
    image: 'https://images.unsplash.com/photo-1505765052545-6d8f3f2f7b2e?auto=format&fit=crop&w=1200&q=80',
    location: 'London, UK',
    price: '$4.2k',
    days: '12 Days Trip',
  },
  {
    id: 'bali',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    location: 'Bali, Indonesia',
    price: '$2.8k',
    days: '10 Days Trip',
  },
]

export default destinations
