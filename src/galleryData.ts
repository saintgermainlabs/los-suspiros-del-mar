export type GalleryCategory = "all" | "beach" | "rooms" | "terrace";

export interface GalleryPhoto {
  id: string;
  url: string;
  thumb: string;
  alt: { en: string; es: string };
  category: Exclude<GalleryCategory, "all">;
}

export const photos: GalleryPhoto[] = [
  // Beach / coastal
  {
    id: "sunset-1",
    url: "https://images.unsplash.com/photo-1785416611427-e29c1f9dbeda?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1785416611427-e29c1f9dbeda?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Vibrant orange sunset over dark ocean waves", es: "Vibrante atardecer naranja sobre las olas oscuras del océano" },
    category: "beach",
  },
  {
    id: "sunset-2",
    url: "https://images.unsplash.com/photo-1606178705129-04a463fd53f4?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1606178705129-04a463fd53f4?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Sea waves crashing on shore during sunset", es: "Olas del mar rompiendo en la orilla al atardecer" },
    category: "beach",
  },
  {
    id: "sunset-3",
    url: "https://images.unsplash.com/photo-1745878169837-5cd8f12693f6?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1745878169837-5cd8f12693f6?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Peaceful beach scene at golden sunset", es: "Playa tranquila con un dorado atardecer" },
    category: "beach",
  },
  {
    id: "lanterns",
    url: "https://images.unsplash.com/photo-1785416611491-cf8751218d02?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1785416611491-cf8751218d02?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Glass lanterns hanging over a vibrant ocean sunset", es: "Linternas de vidrio sobre un atardecer oceánico" },
    category: "beach",
  },
  {
    id: "horses",
    url: "https://images.unsplash.com/photo-1785416611695-f3b41eec479f?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1785416611695-f3b41eec479f?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Silhouettes of horse riders on the beach at sunset", es: "Siluetas de jinetes en la playa al atardecer" },
    category: "beach",
  },
  {
    id: "waves",
    url: "https://images.unsplash.com/photo-1760118504865-cc7dd1bbf580?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1760118504865-cc7dd1bbf580?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Ocean waves crashing along the coastline at sunset", es: "Olas del océano rompiendo en la costa al atardecer" },
    category: "beach",
  },
  // Rooms
  {
    id: "room-1",
    url: "https://images.unsplash.com/photo-1770232274485-b35ee5092cbe?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1770232274485-b35ee5092cbe?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Cozy bedroom with queen bed and coastal blue accents", es: "Acogedora habitación con cama matrimonial y detalles azul costero" },
    category: "rooms",
  },
  {
    id: "room-2",
    url: "https://images.unsplash.com/photo-1771466883546-a988d001f5ba?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1771466883546-a988d001f5ba?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Neatly made bed with bedside lamp and breakfast tray", es: "Cama perfectamente tendida con lámpara de noche y bandeja de desayuno" },
    category: "rooms",
  },
  {
    id: "room-3",
    url: "https://images.unsplash.com/photo-1777017246552-8b0e36b92d52?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1777017246552-8b0e36b92d52?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Ocean view from a light-filled bedroom with balcony", es: "Vista al océano desde una luminosa habitación con balcón" },
    category: "rooms",
  },
  {
    id: "room-4",
    url: "https://images.unsplash.com/photo-1770414173168-f6c666501225?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1770414173168-f6c666501225?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Bright coastal bedroom with white linens", es: "Luminosa habitación costera con sábanas blancas" },
    category: "rooms",
  },
  // Terrace / outdoor
  {
    id: "terrace-1",
    url: "https://images.unsplash.com/photo-1788625517580-d85831ec62f2?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1788625517580-d85831ec62f2?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Tiled terrace with table and chairs overlooking the blue sea", es: "Terraza de azulejos con mesa y sillas frente al mar azul" },
    category: "terrace",
  },
  {
    id: "terrace-2",
    url: "https://images.unsplash.com/photo-1770703674649-435f4d3e89c4?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1770703674649-435f4d3e89c4?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Outdoor dining tables overlooking the ocean", es: "Mesas al aire libre con vista al océano" },
    category: "terrace",
  },
  {
    id: "terrace-3",
    url: "https://images.unsplash.com/photo-1785230991013-dcd6c048a4a4?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1785230991013-dcd6c048a4a4?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Tropical balcony with wooden furniture and ocean view", es: "Balcón tropical con mobiliario de madera y vista al océano" },
    category: "terrace",
  },
  {
    id: "terrace-4",
    url: "https://images.unsplash.com/photo-1779828078103-475e1768e96a?w=1400&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1779828078103-475e1768e96a?w=600&h=450&fit=crop&auto=format",
    alt: { en: "Rocky coastline with structures overlooking the sparkling sea", es: "Costa rocosa con construcciones frente al mar brillante" },
    category: "terrace",
  },
];

// First 9 for the homepage preview — real photos of the property
export const previewPhotos: GalleryPhoto[] = [
  {
    id: "common-room-1",
    url: "/images/Common_Room_View1.jpg",
    thumb: "/images/Common_Room_View1.jpg",
    alt: {
      en: "Common room with marble breakfast bar and windows onto the garden",
      es: "Sala común con barra de desayuno de mármol y ventanas al jardín",
    },
    category: "terrace",
  },
  {
    id: "upstairs-couch",
    url: "/images/Upstairs_Couch.jpg",
    thumb: "/images/Upstairs_Couch.jpg",
    alt: { en: "Bright living area with red sofa", es: "Sala luminosa con sofá rojo" },
    category: "rooms",
  },
  {
    id: "garden",
    url: "/images/Garden.jpg",
    thumb: "/images/Garden.jpg",
    alt: {
      en: "Courtyard garden with red geraniums seen through the window",
      es: "Jardín interior con geranios rojos visto desde la ventana",
    },
    category: "terrace",
  },
  {
    id: "bedroom-1",
    url: "/images/Bedroom1.jpg",
    thumb: "/images/Bedroom1.jpg",
    alt: { en: "Bright bedroom with queen bed", es: "Habitación luminosa con cama matrimonial" },
    category: "rooms",
  },
  {
    id: "shared-kitchen",
    url: "/images/SharedKitchen.jpg",
    thumb: "/images/SharedKitchen.jpg",
    alt: {
      en: "Shared kitchen with tiled backsplash and sink",
      es: "Cocina compartida con azulejos y fregadero",
    },
    category: "rooms",
  },
  {
    id: "bed",
    url: "/images/Bed.jpg",
    thumb: "/images/Bed.jpg",
    alt: {
      en: "Queen bed with white linens and woven textile runner",
      es: "Cama matrimonial con sábanas blancas y textil andino",
    },
    category: "rooms",
  },
  {
    id: "kitchenette",
    url: "/images/IMG_20260909_163801.jpg",
    thumb: "/images/IMG_20260909_163801.jpg",
    alt: {
      en: "Apartment kitchenette with refrigerator and marble bar counter",
      es: "Kitchenette del apartamento con refrigeradora y barra de mármol",
    },
    category: "rooms",
  },
  {
    id: "bedroom-2",
    url: "/images/Bedroom2.jpg",
    thumb: "/images/Bedroom2.jpg",
    alt: { en: "Bedroom with natural light", es: "Habitación con luz natural" },
    category: "rooms",
  },
  {
    id: "reading-corner",
    url: "/images/IMG_20260909_164023.jpg",
    thumb: "/images/IMG_20260909_164023.jpg",
    alt: {
      en: "Cozy reading corner with armchair, lamp and plant",
      es: "Rincón de lectura acogedor con butaca, lámpara y planta",
    },
    category: "terrace",
  },
];
