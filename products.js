/*
  MAHALO MARKET - datos de la tienda.
  Para agregar, quitar o cambiar un producto, edita solo este archivo.
  Cada producto necesita: id (el ASIN de Amazon), name, category, note, added (AAAA-MM-DD).
  Los enlaces se generan solos con tu StoreID (TAG).
*/
const STORE = {
  name: "Mahalo Market",
  tagline: "Hawaii, curated for you",
  tag: "norden0a-20",                  // tu StoreID de Amazon Associates (EE. UU.)
  updated: "2026-11-24",
  disclosure: "As an Amazon Associate I earn from qualifying purchases. Prices and availability are shown on Amazon and may change."
};

const CATEGORIES = [
  { id: "music",     name: "Hawaiian Music",         icon: "🎶", color: "#0E7C86", image: "music.jpg",   blurb: "Slack key guitar and island classics to play at home." },
  { id: "ukulele",   name: "Ukuleles",               icon: "🎸", color: "#2E7D5B", image: "ukulele.jpg", blurb: "Concert ukuleles and starter kits for every island player." },
  { id: "coffee",    name: "Kona Coffee & Treats",   icon: "☕", color: "#7A4A2B", image: "coffee.jpg",  blurb: "100% Kona coffee and island macadamia nuts." },
  { id: "aloha",     name: "Aloha Wear",             icon: "🌺", color: "#F26B5B", image: "aloha.jpg",   blurb: "Aloha shirts for the beach, the luau and everyday." },
  { id: "jewelry",   name: "Koa & Plumeria Jewelry", icon: "🌸", color: "#C9832E", image: "jewelry.jpg", blurb: "Hawaiian koa wood, plumeria and honu pieces." },
  { id: "home",      name: "Tropical Home",          icon: "🏝️", color: "#1F7A8C", image: "home.jpg",    blurb: "Hibiscus and tiki pillow covers for a little aloha at home." },
  { id: "books",     name: "Books & Photos",         icon: "📖", color: "#0B3C49", image: "books.jpg",   blurb: "Island photo books to read and dream with." }
];

const PRODUCTS = [
  // Hawaiian Music
  { id: "B003K2F2Z8", name: "Hawaiian Slack Key Guitar Masters Collection, Vol. 2", category: "music", note: "Double-disc collection of Hawaii's finest slack key artists.", added: "2026-11-24", pick: true },
  { id: "B0000030MF", name: "Hawaiian Slack Key Guitar Masters Instrumental Collection", category: "music", note: "11 all-instrumental tracks. Great for relaxing.", added: "2026-11-24" },
  { id: "B0000E3324", name: "Slack Key Guitar, Volume 2", category: "music", note: "Grammy-winning album, first Best Hawaiian Music Album award.", added: "2026-11-24" },
  { id: "B0007R8FS0", name: "Masters of Hawaiian Slack Key Guitar, Vol. 1", category: "music", note: "Ledward Kaapana, George Kahumoku Jr. and friends.", added: "2026-11-24" },
  { id: "B0012YN6K4", name: "Treasures of Hawaiian Slack Key Guitar", category: "music", note: "Live recordings from the Maui concert series.", added: "2026-11-24" },

  // Ukuleles
  { id: "B093JZ2X47", name: "Vangoa 23\" Concert Ukulele Kit (Mahogany)", category: "ukulele", note: "Complete beginner kit with a mahogany concert uke.", added: "2026-11-24", pick: true },
  { id: "B0D9QL9M2L", name: "LEKATO 23\" Mahogany Concert Ukulele Bundle", category: "ukulele", note: "Gig bag, strap, tuner and picks included.", added: "2026-11-24" },
  { id: "B00G69DPYW", name: "Concert Ukulele 23\" Beginner Bundle, Sapele Body", category: "ukulele", note: "Sapele body, gig bag and tuner.", added: "2026-11-24" },
  { id: "B08B1K1RFP", name: "ADM 23\" Mahogany Concert Ukulele Beginner Kit", category: "ukulele", note: "Aquila strings and a gig bag.", added: "2026-11-24" },

  // Kona coffee & treats
  { id: "B0016BPJAI", name: "Royal Kona Coffee, 100% Kona Whole Bean, Medium Roast", category: "coffee", note: "Smooth, full-bodied Kona. A classic gift.", added: "2026-11-24", pick: true },
  { id: "B0DMMP3Q99", name: "Keokea Coffee Co. 100% Kona Whole Bean, 1 lb", category: "coffee", note: "Grown and packaged on the Big Island.", added: "2026-11-24" },
  { id: "B0FFDMDH5Z", name: "Keokea Coffee Co. 100% Kona Whole Bean, 8 oz", category: "coffee", note: "A smaller bag to try Kona.", added: "2026-11-24" },
  { id: "B00FAZY0D8", name: "Hawaiian Host Dark Chocolate Macadamia Nuts", category: "coffee", note: "Whole, buttery macadamias in dark chocolate.", added: "2026-11-24" },
  { id: "B003VDB79Q", name: "Hawaiian Host Milk Chocolate Macadamia Nuts, 14 oz", category: "coffee", note: "The original chocolate-covered macadamia.", added: "2026-11-24" },
  { id: "B0083DMG3U", name: "Mountains Milk Chocolate Covered Macadamia Nuts", category: "coffee", note: "Mountain-style island treat.", added: "2026-11-24" },

  // Aloha wear
  { id: "B0BRXPMTTV", name: "Men's Hawaiian Short Sleeve Aloha Shirt", category: "aloha", note: "Relaxed tropical print for beach days.", added: "2026-11-24" },
  { id: "B079VWDL8M", name: "INGEAR Men's Stretch Hawaiian Shirt, Quick Dry", category: "aloha", note: "Stretch, quick-dry and machine washable.", added: "2026-11-24", pick: true },
  { id: "B01M7YVMCF", name: "Made in Hawaii 100% Cotton Men's Aloha Shirt", category: "aloha", note: "Hand made in Hawaii, with a matching pocket.", added: "2026-11-24" },

  // Koa & plumeria jewelry
  { id: "B0CKWZ3FMC", name: "Hawaiian Koa Wood & Bone Plumeria Bracelet or Anklet", category: "jewelry", note: "Hand-carved, fully adjustable bracelet or anklet.", added: "2026-11-24", pick: true },
  { id: "B008F1QFYG", name: "Koa Wood Plumeria & Petroglyph Honu Bracelet", category: "jewelry", note: "Adjustable bracelet with a carved honu (sea turtle).", added: "2026-11-24" },

  // Tropical home
  { id: "B0CW32RF83", name: "Fjfz Tiki & Monstera Throw Pillow Covers (Set of 4)", category: "home", note: "Aloha-themed covers for porch and sofa.", added: "2026-11-24" },
  { id: "B0H37ZTQFJ", name: "Tiki Mask Outdoor Pillow Covers, Water Resistant", category: "home", note: "Hibiscus and tiki pattern, made for outdoors.", added: "2026-11-24" },
  { id: "B0H336RMFF", name: "Tiki Bar Throw Pillow Covers, Hawaiian Hibiscus (Set of 2)", category: "home", note: "Retro hibiscus and ocean print for the sofa.", added: "2026-11-24" },

  // Books & photos
  { id: "166078929X", name: "Hawaii: Coffee Table Photography Travel Picture Book", category: "books", note: "Photo tour of the Hawaiian islands.", added: "2026-11-24", pick: true },
  { id: "B0DQDCMX1X", name: "Kauai Photobook: Coffee Table Book", category: "books", note: "Stunning images of Kauai's cities and landscapes.", added: "2026-11-24" },
  { id: "1777062144", name: "Hawaii: Photo Book (Wanderlust) by Elyse Booth", category: "books", note: "Big Island, Maui and Kauai in hardcover.", added: "2026-11-24" }
];
