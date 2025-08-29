export type Testimonial = {
  name: string;
  designation?: string;
  testimonial: string;
  image?: string;
  imageAlt?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Anika Patel",
    designation: "Mumbai, India",
    testimonial:
      "From planning to arrival, everything was effortless and personalized. A truly memorable journey!",
  image: "/testimonialImages/1.jpg",
    imageAlt: "Smiling woman traveler testimonial",
  },
  {
    name: "Liam O’Connor",
    designation: "Dublin, Ireland",
    testimonial:
      "The itinerary was spot on, and the friendly team made us feel right at home. Highly recommended.",
  image: "/testimonialImages/2.jpg",
    imageAlt: "Male traveler outdoors giving testimonial",
  },
  {
    name: "Yuki Nakamura",
    designation: "Tokyo, Japan",
    testimonial:
      "Every detail was seamless, and the local recommendations made our trip truly special.",
  image: "/testimonialImages/3.jpg",
    imageAlt: "Happy traveler woman testimonial",
  },
  {
    name: "Carlos Hernández",
    designation: "Madrid, Spain",
    testimonial:
      "Excellent value and unforgettable experiences. We didn’t have to worry about a thing.",
  image: "/testimonialImages/4.jpg",
    imageAlt: "Male traveler enjoying his trip testimonial",
  },
  {
    name: "Aisha Ahmed",
    designation: "Cairo, Egypt",
    testimonial:
      "Professional staff, engaging tours, and authentic discoveries—our best vacation yet!",
  image: "/testimonialImages/5.jpg",
    imageAlt: "Female traveler testimonial smiling",
  },
];

export default testimonials;
