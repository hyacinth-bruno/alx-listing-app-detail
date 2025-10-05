import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Luxury Villa in Bali",
    rating: 4.8,
    address: {
      street: "123 Paradise Road",
      city: "Bali",
      state: "Bali",
      country: "Indonesia"
    },
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
    images: [
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"
    ],
    description: "Experience luxury living in this stunning villa located in the heart of Bali. This beautiful property features modern amenities, a private pool, and breathtaking views of the surrounding landscape. Perfect for families or groups looking for a peaceful retreat.",
    category: ["WiFi", "Pool", "Kitchen", "Air Conditioning", "Parking", "Ocean View"],
    price: 250,
    offers: {
      bed: "3 Bedrooms",
      shower: "2 Bathrooms",
      occupants: "6 Guests"
    },
    discount: "10% off for 7+ nights",
    reviews: [
      {
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        comment: "Amazing property! The villa exceeded our expectations. Beautiful views and very clean.",
        date: "2024-09-15"
      },
      {
        name: "Mike Chen",
        avatar: "https://i.pravatar.cc/150?img=2",
        rating: 4.5,
        comment: "Great location and wonderful amenities. The host was very responsive and helpful.",
        date: "2024-09-10"
      },
      {
        name: "Emma Williams",
        avatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        comment: "Perfect for our family vacation. The kids loved the pool and we enjoyed the peaceful atmosphere.",
        date: "2024-08-25"
      }
    ]
  },
  {
    name: "Modern Apartment in Tokyo",
    rating: 4.5,
    address: {
      street: "456 Shibuya Street",
      city: "Tokyo",
      state: "Tokyo",
      country: "Japan"
    },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
    ],
    description: "A sleek and modern apartment in the vibrant Shibuya district. Close to shopping, dining, and public transportation.",
    category: ["WiFi", "Workspace", "Kitchen", "Washer", "City View"],
    price: 180,
    offers: {
      bed: "2 Bedrooms",
      shower: "1 Bathroom",
      occupants: "4 Guests"
    },
    reviews: [
      {
        name: "David Lee",
        avatar: "https://i.pravatar.cc/150?img=4",
        rating: 4,
        comment: "Great location in the heart of Tokyo. Very convenient for exploring the city.",
        date: "2024-09-20"
      }
    ]
  }
];