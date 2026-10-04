import React from 'react';
import { HOTEL_CONFIG } from '@/data/rooms';

export default function StructuredData() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hostelo Cartagena Resort & Spa",
    "alternateName": "Hostelo 5 Estrellas Cartagena",
    "description": "Exclusivo resort 5 estrellas de 25 pisos y 100 habitaciones frente al Mar Caribe en Bocagrande, Cartagena de Indias. Suites y penthouses de lujo con vistas panorámicas de 360°, rooftop pool en piso 25 y atención de concierge VIP.",
    "url": "https://hostelocartagena.com",
    "image": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80"
    ],
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "priceRange": "$300,000 COP - $700,000 COP",
    "currenciesAccepted": "COP, USD, EUR",
    "paymentAccepted": "Credit Card, Debit Card, Bank Transfer, Cash",
    "numberOfRooms": 100,
    "telephone": "+573225614734",
    "email": "reservas@hostelocartagena.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida San Martín con Calle 6, Bocagrande",
      "addressLocality": "Cartagena de Indias",
      "addressRegion": "Bolívar",
      "postalCode": "130001",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.3997,
      "longitude": -75.5564
    },
    "checkinTime": "15:00",
    "checkoutTime": "12:00",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Rooftop Sky Pool Piso 25",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Penthouses Exclusivos Pisos 21 a 25",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Club de Playa Privado",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Spa Aura Caribe y Circuito Hídrico",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Restaurante Gourmet Mar & Fuego",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Wi-Fi 6 de alta velocidad gratuito",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Servicio de Concierge VIP 24/7 (Martín Quintero)",
        "value": true
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.92",
      "reviewCount": "1280",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuál es la distribución de habitaciones y pisos en Hostelo Cartagena?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hostelo cuenta con una torre de 25 pisos con solo 4 habitaciones por nivel (100 habitaciones en total). Los pisos 1 al 20 albergan habitaciones normales y deluxe desde $300,000 COP, y los pisos 21 al 25 son exclusivos Penthouses con jacuzzi privado y vistas de 180° a 360°, culminando en la suite presidencial del piso 25 a $700,000 COP la noche."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué rango de precios por noche tiene Hostelo Cartagena?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las tarifas van desde $300,000 COP por noche en habitaciones deluxe hasta $700,000 COP por noche en la Master Sky Penthouse del piso 25. Incluyen desayuno buffet gourmet caribeño y acceso a todas las amenidades del resort."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo puedo contactar al Concierge para reservas directas o tours a Islas del Rosario?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puedes comunicarte directamente con Martín Quintero, Head of Concierge, a través de WhatsApp al +57 322 561 4734 las 24 horas del día para asistencia en reservas, traslados desde el aeropuerto y alquiler de yates."
        }
      },
      {
        "@type": "Question",
        "name": "¿Hostelo cuenta con piscina y playa privada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Hostelo ofrece una piscina infinita en el Rooftop del Piso 25 con vistas panorámicas al Caribe y atardeceres espectaculares, además de un Club de Playa privado con camas balinesas y servicio de alimentos y bebidas."
        }
      }
    ]
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://hostelocartagena.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Habitaciones & Penthouses",
        "item": "https://hostelocartagena.com/#habitaciones"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Arquitectura 25 Pisos",
        "item": "https://hostelocartagena.com/#pisos"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Experiencias & Spa",
        "item": "https://hostelocartagena.com/#experiencias"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  );
}
