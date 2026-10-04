export type Currency = 'COP' | 'USD' | 'EUR';
export type Language = 'es' | 'en';

export type RoomCategory = 'standard' | 'penthouse';

export interface Room {
  id: string;
  name: {
    es: string;
    en: string;
  };
  category: RoomCategory;
  floorRange: {
    min: number;
    max: number;
  };
  availableFloors: number[];
  roomsPerFloor: number;
  priceCOP: number;
  capacity: {
    adults: number;
    children: number;
  };
  sizeM2: number;
  bedType: {
    es: string;
    en: string;
  };
  view: {
    es: string;
    en: string;
  };
  features: {
    es: string[];
    en: string[];
  };
  images: string[];
  popularBadge?: {
    es: string;
    en: string;
  };
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  selectedFloor?: number;
  selectedRoomId?: string;
}

export interface Amenity {
  id: string;
  title: {
    es: string;
    en: string;
  };
  subtitle: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  image: string;
  highlight: {
    es: string;
    en: string;
  };
  iconName: string;
  floorLocation?: {
    es: string;
    en: string;
  };
}

export interface Review {
  id: string;
  author: string;
  origin: string;
  rating: number;
  date: string;
  avatar: string;
  comment: {
    es: string;
    en: string;
  };
  roomType: {
    es: string;
    en: string;
  };
}
