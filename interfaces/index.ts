export interface PropertyProps {
  name: string;
  rating: number;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  };
  image: string;
  images?: string[];
  description: string;
  category: string[];
  price: number;
  offers?: {
    bed: string;
    shower: string;
    occupants: string;
  };
  discount?: string;
  reviews?: ReviewProps[];
}

export interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date?: string;
}