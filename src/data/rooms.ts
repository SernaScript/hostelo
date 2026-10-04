import { Room } from '@/types';

export const HOTEL_CONFIG = {
  name: "Hostelo",
  fullName: "Hostelo Cartagena Resort & Spa 5★",
  totalFloors: 25,
  roomsPerFloor: 4,
  totalRooms: 100,
  minPriceCOP: 300000,
  maxPriceCOP: 700000,
  concierge: {
    name: "Martín Quintero",
    phone: "3225614734",
    phoneFormatted: "+57 322 561 4734",
    whatsappClean: "573225614734",
    email: "reservas@hostelocartagena.com",
    role: "Head of Concierge & VIP Guest Experience",
  },
  location: {
    city: "Cartagena de Indias",
    department: "Bolívar",
    country: "Colombia",
    address: "Avenida San Martín con Calle 6, Bocagrande, Cartagena de Indias",
    geo: {
      latitude: 10.3997,
      longitude: -75.5564,
    },
  },
  usdExchangeRate: 4000, // 1 USD = 4,000 COP
  eurExchangeRate: 4350, // 1 EUR = 4,350 COP
};

export const ROOMS_DATA: Room[] = [
  {
    id: "deluxe-classic",
    name: {
      es: "Habitación Deluxe Clásica",
      en: "Deluxe Classic Room",
    },
    category: "standard",
    floorRange: { min: 1, max: 8 },
    availableFloors: [1, 2, 3, 4, 5, 6, 7, 8],
    roomsPerFloor: 4,
    priceCOP: 300000,
    capacity: { adults: 2, children: 1 },
    sizeM2: 38,
    bedType: {
      es: "1 Cama King o 2 Camas Queen",
      en: "1 King Bed or 2 Queen Beds",
    },
    view: {
      es: "Vista a los jardines tropicales y bahía",
      en: "Tropical gardens and bay view",
    },
    features: {
      es: [
        "Balcón privado con asientos de descanso",
        "Aire acondicionado climatizado silencioso",
        "Smart TV 55\" 4K con streaming",
        "Wi-Fi 6 de ultra alta velocidad",
        "Baño en mármol con ducha de lluvia",
        "Cafetera espresso premium y minibar",
        "Desayuno buffet caribeño incluido"
      ],
      en: [
        "Private balcony with lounge seating",
        "Whisper-quiet climate control AC",
        "55\" 4K Smart TV with streaming",
        "Ultra high-speed Wi-Fi 6",
        "Marble bathroom with rain shower",
        "Premium espresso maker and minibar",
        "Included Caribbean breakfast buffet"
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    popularBadge: {
      es: "Tarifa Más Popular",
      en: "Best Value",
    },
  },
  {
    id: "superior-caribbean",
    name: {
      es: "Habitación Superior Caribeña",
      en: "Superior Caribbean Room",
    },
    category: "standard",
    floorRange: { min: 9, max: 15 },
    availableFloors: [9, 10, 11, 12, 13, 14, 15],
    roomsPerFloor: 4,
    priceCOP: 360000,
    capacity: { adults: 2, children: 1 },
    sizeM2: 44,
    bedType: {
      es: "1 Cama King Size Plush",
      en: "1 Plush King Size Bed",
    },
    view: {
      es: "Vista al mar y atardecer de Cartagena",
      en: "Ocean view and Cartagena sunset",
    },
    features: {
      es: [
        "Balcón con vista abierta al Mar Caribe",
        "Bata de baño y pantuflas de algodón egipcio",
        "Caja fuerte digital para laptop",
        "Servicio a la habitación 24 horas",
        "Menú de almohadas personalizadas",
        "Cortinas blackout automáticas",
        "Acceso directo a la zona de piscinas y playa"
      ],
      en: [
        "Balcony with open Caribbean Sea view",
        "Egyptian cotton bathrobes and slippers",
        "Digital laptop safe",
        "24-hour room service",
        "Custom pillow menu",
        "Automated blackout curtains",
        "Direct access to pool and beach club"
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
  },
  {
    id: "grand-oceanfront",
    name: {
      es: "Habitación Grand Oceanfront",
      en: "Grand Oceanfront Room",
    },
    category: "standard",
    floorRange: { min: 16, max: 20 },
    availableFloors: [16, 17, 18, 19, 20],
    roomsPerFloor: 4,
    priceCOP: 420000,
    capacity: { adults: 2, children: 2 },
    sizeM2: 52,
    bedType: {
      es: "1 Cama King Size + Sala integrada",
      en: "1 King Bed + Integrated Lounge",
    },
    view: {
      es: "Vista frontal infinita al Mar Caribe",
      en: "Infinite front view to the Caribbean Sea",
    },
    features: {
      es: [
        "Pisos altos con brisa marina y vista panorámica",
        "Terraza extendida con camastros privados",
        "Bañera profunda exenta con sales minerales caribeñas",
        "Sistema de sonido envolvente Bluetooth Marshall",
        "Minibar premium con coctelería de autor de cortesía",
        "Check-in prioritario en recepción VIP",
        "Desayuno gourmet servido en la habitación sin costo"
      ],
      en: [
        "High floors with sea breezes & panoramic views",
        "Extended terrace with private sun loungers",
        "Deep soaking tub with Caribbean bath salts",
        "Marshall Bluetooth surround sound system",
        "Complimentary artisanal cocktail minibar",
        "Priority VIP check-in",
        "Complimentary gourmet in-room breakfast"
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    popularBadge: {
      es: "Favorita Parejas",
      en: "Couples Choice",
    },
  },
  {
    id: "sky-penthouse-horizon",
    name: {
      es: "Penthouse Sky Horizon",
      en: "Sky Horizon Penthouse",
    },
    category: "penthouse",
    floorRange: { min: 21, max: 23 },
    availableFloors: [21, 22, 23],
    roomsPerFloor: 4,
    priceCOP: 550000,
    capacity: { adults: 3, children: 1 },
    sizeM2: 78,
    bedType: {
      es: "1 King Master + Sala de estar independiente",
      en: "1 Master King + Separate Living Room",
    },
    view: {
      es: "Vistas de 180° a Tierrabomba y el horizonte",
      en: "180° panoramic view of Tierrabomba & horizon",
    },
    features: {
      es: [
        "Pisos superiores (21 a 23): máxima tranquilidad y altura",
        "Jacuzzi privado en el balcón con vista al atardecer",
        "Comedor privado y barra de licores importados",
        "Servicio de Concierge dedicado (Martín Quintero)",
        "Acceso preferencial sin filas al Rooftop Lounge",
        "Traslado en vehículo privado desde/hacia el Aeropuerto Rafael Núñez",
        "Cata de rones colombianos y café de origen incluida"
      ],
      en: [
        "High penthouse level (Floors 21-23): ultimate serenity",
        "Private balcony jacuzzi overlooking the sunset",
        "Private dining table and imported liquor bar",
        "Dedicated concierge service (Martín Quintero)",
        "Priority VIP skip-the-line access to Rooftop Lounge",
        "Private luxury airport transfer from/to CTG Airport",
        "Complimentary Colombian rum & coffee tasting"
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80"
    ],
    popularBadge: {
      es: "Penthouse Exclusivo",
      en: "Exclusive Penthouse",
    },
  },
  {
    id: "master-penthouse-suite",
    name: {
      es: "Master Penthouse Suite",
      en: "Master Penthouse Suite",
    },
    category: "penthouse",
    floorRange: { min: 24, max: 24 },
    availableFloors: [24],
    roomsPerFloor: 4,
    priceCOP: 620000,
    capacity: { adults: 4, children: 2 },
    sizeM2: 95,
    bedType: {
      es: "Master King + Segunda habitación Queen",
      en: "Master King + Second Queen Bedroom",
    },
    view: {
      es: "Vista panorámica 270° Mar Caribe y Centro Histórico",
      en: "270° panoramic view of Caribbean Sea & Walled City",
    },
    features: {
      es: [
        "Piso 24: penúltimo piso de la torre, vista privilegiada",
        "Doble terraza panorámica con jacuzzi para 4 personas",
        "Dos baños completos revestidos en mármol italiano",
        "Mayordomo personal disponible durante toda la estancia",
        "Desayuno a la carta servido en la terraza por chef privado",
        "Reserva garantizada de camas balinesas en la playa y piscina",
        "Acceso ilimitado al circuito hídrico del Spa"
      ],
      en: [
        "24th floor: privileged height with breathtaking vista",
        "Dual panoramic terraces with 4-person jacuzzi",
        "Two full bathrooms clad in Italian marble",
        "Personal butler available throughout your stay",
        "A la carte breakfast served on terrace by private chef",
        "Guaranteed reserved Balinese daybeds at beach & pool",
        "Unlimited access to the Spa hydrotherapy circuit"
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
    ],
    popularBadge: {
      es: "Alta Gama",
      en: "Ultra Luxury",
    },
  },
  {
    id: "presidential-sky-penthouse",
    name: {
      es: "Sky Penthouse Presidencial Imperial",
      en: "Imperial Presidential Sky Penthouse",
    },
    category: "penthouse",
    floorRange: { min: 25, max: 25 },
    availableFloors: [25],
    roomsPerFloor: 4,
    priceCOP: 700000,
    capacity: { adults: 4, children: 2 },
    sizeM2: 135,
    bedType: {
      es: "Gran Suite Presidencial King + Suite Huéspedes",
      en: "Grand Presidential King Suite + Guest Suite",
    },
    view: {
      es: "Piso 25 Cumbre: Vista 360° Cartagena, Océano y Bahía",
      en: "25th Floor Top: 360° Cartagena, Ocean & Bay view",
    },
    features: {
      es: [
        "Piso 25: La suite más codiciada y exclusiva de Cartagena",
        "Terraza rooftop privada de 40m² con jacuzzi infinito climatizado",
        "Ascensor privado de acceso directo con llave biométrica",
        "Concierge personal VIP 24/7 (Martín Quintero)",
        "Chef privado disponible para cenas románticas en la terraza",
        "Yate privado incluido para tour exprés a Islas del Rosario (estancia 3+ noches)",
        "Bodega de champagne y selección de café especial colombiano"
      ],
      en: [
        "25th Floor: The most coveted and exclusive suite in Cartagena",
        "Private 40m² rooftop terrace with heated infinity jacuzzi",
        "Private elevator direct access with biometric key",
        "24/7 dedicated VIP concierge (Martín Quintero)",
        "Private chef available for candlelit dinners on your terrace",
        "Complimentary private yacht tour to Rosario Islands (3+ night stays)",
        "Curated champagne cellar & special Colombian reserve coffees"
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
    ],
    popularBadge: {
      es: "Suite Más Exclusiva (Piso 25)",
      en: "Crown Suite (Floor 25)",
    },
  },
];
