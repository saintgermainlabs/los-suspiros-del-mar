export type GalleryCategory = "all" | "beach" | "rooms" | "terrace";

export interface GalleryPhoto {
  id: string;
  url: string;
  thumb: string;
  alt: { en: string; es: string };
  category: Exclude<GalleryCategory, "all">;
}

export const photos: GalleryPhoto[] = [
  // Common Areas (Category: "beach" under the hood)
  {
    id: "common-area",
    url: "/images/Common_Area.jpg",
    thumb: "/images/Common_Area.jpg",
    alt: { en: "Bright common area with dining table and seating", es: "Área común luminosa con mesa de comedor y asientos" },
    category: "beach",
  },
  {
    id: "common-room-couches",
    url: "/images/Common_Room_Couches.jpg",
    thumb: "/images/Common_Room_Couches.jpg",
    alt: { en: "Comfortable couches in the spacious common room", es: "Sofás cómodos en la amplia sala común" },
    category: "beach",
  },
  {
    id: "couches-downstairs",
    url: "/images/CouchesDownstairs.jpg",
    thumb: "/images/CouchesDownstairs.jpg",
    alt: { en: "Cozy seating area on the ground floor", es: "Área de estar acogedora en el primer piso" },
    category: "beach",
  },
  {
    id: "shared-kitchen-1",
    url: "/images/SharedKitchen.jpg",
    thumb: "/images/SharedKitchen.jpg",
    alt: { en: "Shared guest kitchen with clean sink and wooden shelves", es: "Cocina compartida para huéspedes con lavadero limpio y repisas de madera" },
    category: "beach",
  },
  {
    id: "shared-kitchen-2",
    url: "/images/Shared_Kitchen.jpg",
    thumb: "/images/Shared_Kitchen.jpg",
    alt: { en: "Spacious shared kitchen area with countertops", es: "Amplia área de cocina compartida con encimeras" },
    category: "beach",
  },
  {
    id: "shared-kitchen-appliances",
    url: "/images/Shared_Kitchen_Appliances.jpg",
    thumb: "/images/Shared_Kitchen_Appliances.jpg",
    alt: { en: "Shared kitchen appliances and dining table", es: "Electrodomésticos de cocina compartida y mesa de comedor" },
    category: "beach",
  },
  {
    id: "appartment-kitchen",
    url: "/images/Appartment_Kitchen.jpg",
    thumb: "/images/Appartment_Kitchen.jpg",
    alt: { en: "Private, fully equipped kitchen in the upstairs apartment", es: "Cocina privada completamente equipada en el apartamento del piso superior" },
    category: "beach",
  },
  {
    id: "kitchenette-details",
    url: "/images/IMG_20260909_163957.jpg",
    thumb: "/images/IMG_20260909_163957.jpg",
    alt: { en: "Kitchenette shelf with coffee maker and kettle", es: "Repisa de kitchenette con cafetera y hervidor" },
    category: "beach",
  },

  // Rooms & Apartments (Category: "rooms")
  {
    id: "room-1",
    url: "/images/Bedroom1.jpg",
    thumb: "/images/Bedroom1.jpg",
    alt: { en: "Standard Sea Breeze Room with a queen bed and natural light", es: "Habitación Brisa del Mar con cama matrimonial y luz natural" },
    category: "rooms",
  },
  {
    id: "room-2",
    url: "/images/Bedroom2.jpg",
    thumb: "/images/Bedroom2.jpg",
    alt: { en: "Double Sunset Room, beautifully styled with soft linens", es: "Habitación Doble Atardecer, bellamente decorada con sábanas suaves" },
    category: "rooms",
  },
  {
    id: "room-3",
    url: "/images/Bedroom3.jpg",
    thumb: "/images/Bedroom3.jpg",
    alt: { en: "Family Shore Room with queen and single bed", es: "Habitación Familiar Orilla con cama matrimonial e individual" },
    category: "rooms",
  },
  {
    id: "room-4",
    url: "/images/Bedroom4.jpg",
    thumb: "/images/Bedroom4.jpg",
    alt: { en: "Ocean Calm Room with coastal design and premium comfort", es: "Habitación Calma Oceánica con diseño costero y confort premium" },
    category: "rooms",
  },
  {
    id: "bed-detail",
    url: "/images/Bed.jpg",
    thumb: "/images/Bed.jpg",
    alt: { en: "Close-up of a neatly made bed with traditional textile runner", es: "Primer plano de una cama tendida con textil tradicional andino" },
    category: "rooms",
  },
  {
    id: "apt-bedroom-1",
    url: "/images/Appartment_Bedroom_View1.jpg",
    thumb: "/images/Appartment_Bedroom_View1.jpg",
    alt: { en: "Spacious master bedroom in the private apartment", es: "Dormitorio principal amplio en el apartamento privado" },
    category: "rooms",
  },
  {
    id: "apt-bedroom-2",
    url: "/images/Appartment_Bedroom_View2.jpg",
    thumb: "/images/Appartment_Bedroom_View2.jpg",
    alt: { en: "Second bedroom in the private apartment with comfortable layout", es: "Segundo dormitorio en el apartamento privado con diseño cómodo" },
    category: "rooms",
  },
  {
    id: "apt-bathroom",
    url: "/images/Appartment_Bathroom.jpg",
    thumb: "/images/Appartment_Bathroom.jpg",
    alt: { en: "Clean and modern private bathroom with tiled finishes", es: "Baño privado limpio y moderno con acabados de azulejos" },
    category: "rooms",
  },
  {
    id: "apt-shower",
    url: "/images/Appartment_Shower.jpg",
    thumb: "/images/Appartment_Shower.jpg",
    alt: { en: "Spacious private shower with hot water", es: "Ducha privada amplia con agua caliente" },
    category: "rooms",
  },

  // Garden & Views (Category: "terrace")
  {
    id: "garden-view-1",
    url: "/images/Garden.jpg",
    thumb: "/images/Garden.jpg",
    alt: { en: "Beautiful courtyard garden view with red geraniums through the window", es: "Hermosa vista al jardín interior con geranios rojos a través de la ventana" },
    category: "terrace",
  },
  {
    id: "garden-view-2",
    url: "/images/Garden2.jpg",
    thumb: "/images/Garden2.jpg",
    alt: { en: "Lush potted plants in our sunny courtyard garden", es: "Exuberantes plantas en maceta en nuestro soleado jardín interior" },
    category: "terrace",
  },
  {
    id: "common-room-view",
    url: "/images/Common_Room_View1.jpg",
    thumb: "/images/Common_Room_View1.jpg",
    alt: { en: "Spacious common room looking out into the green courtyard garden", es: "Amplia sala común con vista al verde jardín del patio interior" },
    category: "terrace",
  },
  {
    id: "apt-living-area-1",
    url: "/images/Upstairs_Couch.jpg",
    thumb: "/images/Upstairs_Couch.jpg",
    alt: { en: "Private living room with red sofa and natural lighting in the apartment", es: "Sala de estar privada con sofá rojo e iluminación natural en el apartamento" },
    category: "terrace",
  },
  {
    id: "apt-living-area-2",
    url: "/images/Upstairs_Couch2.jpg",
    thumb: "/images/Upstairs_Couch2.jpg",
    alt: { en: "Comfortable apartment lounge area", es: "Cómoda área de estar en el apartamento" },
    category: "terrace",
  },
  {
    id: "reading-corner-detail",
    url: "/images/IMG_20260909_164023.jpg",
    thumb: "/images/IMG_20260909_164023.jpg",
    alt: { en: "Quiet reading corner with a comfortable chair, lamp, and plant", es: "Rincón de lectura tranquilo con sillón cómodo, lámpara y planta" },
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
