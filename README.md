# Hostelo Cartagena — Resort 5 Estrellas & Sky Penthouses 🌴🏨

Sitio web oficial de **Hostelo**, un exclusivo resort 5 estrellas frente al Mar Caribe en Cartagena de Indias, Colombia.

Diseñado con estándares de alta hotelería internacional, arquitectura de 25 pisos con 4 suites por nivel (100 habitaciones en total), penthouses en los pisos superiores, cotizador en tiempo real y optimización extrema para motores de búsqueda (**SEO internacional**).

---

## 🌟 Características Principales

* **Stack Moderno**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide Icons.
* **Concepto Arquitectónico**:
  * **25 Pisos** de altura frente al Caribe y a la Bahía de Cartagena.
  * **4 Suites por Piso** (100 suites en total: privacidad y exclusividad absoluta).
  * **Pisos 1 al 20**: Habitaciones Normales / Deluxe desde **\$300,000 COP** / noche.
  * **Pisos 21 al 25**: Penthouses Exclusivos con jacuzzis privados y la Master Suite Presidencial en el piso 25 hasta **\$700,000 COP** / noche.
* **Atención VIP & Concierge**:
  * **Martín Quintero** — Head of Concierge & VIP Guest Experience.
  * Contacto directo: **+57 322 561 4734** (WhatsApp y llamadas 24/7).
* **SEO de Primer Nivel**:
  * Schemas JSON-LD estructurados para Google: `Hotel`, `FAQPage`, `BreadcrumbList`.
  * Metadatos dinámicos OpenGraph, Twitter Cards y etiquetas canónicas.
  * `sitemap.xml` y `robots.txt` generados automáticamente.
* **Internacionalización & Multidivisa**:
  * Soporte Bilingüe instantáneo (Español / Inglés).
  * Conversor en vivo a Pesos Colombianos (COP), Dólares (USD) y Euros (EUR).
* **Motor de Reserva Rápido**:
  * Barra interactiva de reservas con cálculo de noches.
  * Generación de solicitud de reserva formateada y enviada directamente al WhatsApp de Martín Quintero.

---

## 🚀 Cómo Ejecutar el Proyecto

```bash
# 1. Acceder al directorio del proyecto
cd /Users/diegoserna/.gemini/antigravity/scratch/hostelo-cartagena

# 2. Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador en http://localhost:3000

# 3. Compilar para producción
npm run build

# 4. Iniciar en modo producción
npm run start
```

---

## 📁 Estructura del Código

* `src/app/`: Rutas, Layout con Google Fonts, Sitemap y Robots.
* `src/components/`:
  * `layout/`: Navbar y Footer con enlaces de contacto y cambio de divisa/idioma.
  * `hero/`: HeroSection con título H1 SEO, estadísticas y BookingWidget.
  * `rooms/`: FloorVisualizer (visualizador de los 25 pisos), RoomsCatalog y RoomCard.
  * `experiences/`: AmenitiesSection (Rooftop Piso 25, Spa, Restaurante de Autor, Beach Club).
  * `concierge/`: ConciergeSection con contacto directo a Martín Quintero.
  * `reviews/`: ReviewSection con testimonios internacionales (4.92/5 estrellas).
  * `faq/`: FAQSection con acordeón interactivo y respuestas para SEO.
  * `booking/`: ReservationModal para cotización y envío a WhatsApp.
* `src/data/`: `rooms.ts`, `amenities.ts`, `translations.ts`.
* `src/context/`: `SettingsContext.tsx` (gestión global de idioma, divisa y reservas).
