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
    id: 'london',
    image: 'https://images.unsplash.com/photo-1505765052545-6d8f3f2f7b2e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    location: 'London, UK',
    price: '$4.2k',
    days: '12 Days Trip',
  },
  {
    id: 'paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2',
    location: 'Paris, France',
    price: '$3.6k',
    days: '8 Days Trip',
  },
  {
    id: 'bali',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3',
    location: 'Bali, Indonesia',
    price: '$2.8k',
    days: '10 Days Trip',
  },
  {
    id: 'tokyo',
    image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4',
    location: 'Tokyo, Japan',
    price: '$5.1k',
    days: '9 Days Trip',
  },
]

export default destinations
