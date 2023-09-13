export interface Room {
  id: number;
  hostId:number
  name: string;
  rating: number;
  description: string;
  maxGuest: number;
  price: number;
  view: string;
  images: [];
  category: string;
  persons: number;
  checkInTime: string;
  checkOutTime: string;
  location: string;
  utilities: [];
  stars: {
    service: number;
    room: number;
    food: number;
    cleanness: number;
  };
  createAt: number;
  reviewsCount: number;
}
