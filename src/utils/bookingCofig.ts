export type BookingStep = {
  title: string;
  description: string;
  image: string; // public URL (served from /public)
};

// Booking steps shown in the BookingSection UI.
// Images are stored in public/bookingImages and served at /bookingImages/*
export const bookingCofig: BookingStep[] = [
  {
    title: "Choose Destination",
    description:
      "Browse curated destinations and filter by interests, budget, and travel dates to find the perfect place for your next trip. Each destination includes highlights, recommended activities, and local tips to help you decide quickly.",
    image: "/bookingImages/1.svg",
  },
  {
    title: "Make Payment",
    description:
      "Securely complete your booking with our fast checkout. We support multiple payment options and show a clear summary of fees, taxes, and cancellation terms so you can pay with confidence.",
    image: "/bookingImages/2.svg",
  },
  {
    title: "Reach Airport on Selected Date",
    description:
      "Get ready for departure: receive your e-ticket, suggested arrival time, and helpful pre-flight reminders so you arrive at the airport stress-free and on time for your selected travel date.",
    image: "/bookingImages/3.svg",
  },
];

export default bookingCofig;
