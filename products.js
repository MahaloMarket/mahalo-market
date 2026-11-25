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
  updated: "2026-11-25",
  disclosure: "As an Amazon Associate I earn from qualifying purchases. Prices and availability are shown on Amazon and may change."
};

const CATEGORIES = [
  { id: "music",     name: "Hawaiian Music & Film",  icon: "🎶", color: "#0E7C86", image: "music.jpg",   blurb: "Slack key guitar, island classics and hula on DVD." },
  { id: "coffee",    name: "Kona Coffee & Treats",   icon: "☕", color: "#7A4A2B", image: "coffee.jpg",  blurb: "100% Kona coffee and island macadamia nuts." },
  { id: "aloha",     name: "Aloha Wear",             icon: "🌺", color: "#F26B5B", image: "aloha.jpg",   blurb: "Dresses, aloha shirts and island tees for everyday and the beach." },
  { id: "party",     name: "Luau & Party",           icon: "🎉", color: "#E8604C", image: "party.jpg",   blurb: "Hula skirts, leis and costume sets for your luau." },
  { id: "jewelry",   name: "Koa & Plumeria Jewelry", icon: "🌸", color: "#C9832E", image: "jewelry.jpg", blurb: "Hawaiian koa wood, plumeria and honu pieces." },
  { id: "home",      name: "Tropical Home",          icon: "🏝️", color: "#1F7A8C", image: "home.jpg",    blurb: "Hibiscus and tiki pillow covers for a little aloha at home." },
  { id: "books",     name: "Books & Photos",         icon: "📖", color: "#0B3C49", image: "books.jpg",   blurb: "Island photo books to read and dream with." }
];

const PRODUCTS = [
  // Hawaiian Music
  { id: "B003K2F2Z8", name: "Hawaiian Slack Key Guitar Masters Collection, Vol. 2", category: "music", note: "Double-disc collection of Hawaii's finest slack key artists.", added: "2026-11-24", pick: true },
  { id: "B0000030MF", name: "Hawaiian Slack Key Guitar Masters Instrumental Collection", category: "music", note: "11 all-instrumental tracks. Great for relaxing.", added: "2026-11-24" },
  { id: "B0085BPOV6", name: "Hula for Life: 2-DVD Set", category: "music", note: "Learn basic hula steps, hand motions and ukulele songs at home.", added: "2026-11-25" },
  { id: "B000060JYH", name: "Hawaii Songs of Aloha (DVD)", category: "music", note: "PBS concert with hula, chant and slack key.", added: "2026-11-25" },
  { id: "B0124KY2YI", name: "Hawaiian Rainbow / Kumu Hula: Keepers of a Culture (DVD)", category: "music", note: "Two films on Hawaiian music and hula traditions.", added: "2026-11-25" },
  { id: "B0000E3324", name: "Slack Key Guitar, Volume 2", category: "music", note: "Grammy-winning album, first Best Hawaiian Music Album award.", added: "2026-11-24" },
  { id: "B0007R8FS0", name: "Masters of Hawaiian Slack Key Guitar, Vol. 1", category: "music", note: "Ledward Kaapana, George Kahumoku Jr. and friends.", added: "2026-11-24" },
  { id: "B0012YN6K4", name: "Treasures of Hawaiian Slack Key Guitar", category: "music", note: "Live recordings from the Maui concert series.", added: "2026-11-24" },
  { id: "B000M4RFXO", name: "Legends of Hawaiian Slack Key Guitar, Live from Maui", category: "music", note: "Live recording from the Ritz-Carlton at Kapalua, Maui.", added: "2026-11-25" },
  { id: "B000009S47", name: "Wa'ahila (Ray Kane)", category: "music", note: "Solo slack key album with melancholy, folk-tinged playing.", added: "2026-11-25" },
  { id: "B001SJ6U10", name: "6 & 12 String Slack Key (Cyril Pahinui)", category: "music", note: "Slack key on six and twelve-string guitar.", added: "2026-11-25" },

  // Kona coffee & treats
  { id: "B0016BPJAI", name: "Royal Kona Coffee, 100% Kona Whole Bean, Medium Roast", category: "coffee", note: "Smooth, full-bodied Kona. A classic gift.", added: "2026-11-24", pick: true },
  { id: "B00FAZY0D8", name: "Hawaiian Host Dark Chocolate Macadamia Nuts", category: "coffee", note: "Whole, buttery macadamias in dark chocolate.", added: "2026-11-24" },
  { id: "B003VDB79Q", name: "Hawaiian Host Milk Chocolate Macadamia Nuts, 14 oz", category: "coffee", note: "The original chocolate-covered macadamia.", added: "2026-11-24" },
  { id: "B0083DMG3U", name: "Mountains Milk Chocolate Covered Macadamia Nuts", category: "coffee", note: "Mountain-style island treat.", added: "2026-11-24" },
  { id: "B087P4H41W", name: "100% Kona Coffee Gift Bag, Ground, with Macadamia Chocolate", category: "coffee", note: "8 oz of Kona with a package of dark chocolate macadamias.", added: "2026-11-25", pick: true },
  { id: "B0892V3FNC", name: "Royal Kona Coffee Ground, 100% Hawaiian Kona, Pack of 2", category: "coffee", note: "Private Reserve medium roast, ground for drip brewing.", added: "2026-11-25" },
  { id: "B092X6TRQK", name: "Mauna Loa Sea Salt Roasted Macadamia Nuts, 7 oz", category: "coffee", note: "Roasted macadamias with sea salt, a savory island snack.", added: "2026-11-25" },

  // Aloha wear
  { id: "B0BRXPMTTV", name: "Men's Hawaiian Short Sleeve Aloha Shirt", category: "aloha", note: "Relaxed tropical print for beach days.", added: "2026-11-24" },
  { id: "B00BRC84GM", name: "White Hibiscus Hawaiian Dress, 100% Cotton", category: "aloha", note: "Sleeveless aloha dress with a hibiscus print.", added: "2026-11-25" },
  { id: "B0FR1MYR2L", name: "Hawaii The Aloha State Vintage Comfort Colors Tee", category: "aloha", note: "Retro Aloha State design on a heavyweight cotton tee.", added: "2026-11-25" },
  { id: "B081ZQK2KH", name: "Hawaiian Islands Topo Map Tri-Blend Tee", category: "aloha", note: "A topographic map of the eight main islands.", added: "2026-11-25" },
  { id: "B07MQ79XFM", name: "Hawaii State Seal Vintage Island Tee", category: "aloha", note: "Distressed tee with the state flag and seal.", added: "2026-11-25" },
  { id: "B0CSXKD2SK", name: "Manini'owali Beach Sunset Hibiscus Tote Bag", category: "aloha", note: "Sturdy beach tote with a hibiscus sunset design.", added: "2026-11-25" },
  { id: "B0CSXL2GLL", name: "Lanikai Beach Sunset Hibiscus Tote Bag", category: "aloha", note: "Beach tote with a hibiscus sunset design.", added: "2026-11-25" },
  { id: "B0CSXMXHC5", name: "Shipwreck Beach Sunset Hibiscus Tote Bag", category: "aloha", note: "Beach tote with reinforced seams and a hibiscus print.", added: "2026-11-25" },
  { id: "B0FH7C5SD5", name: "Aloha Hibiscus Retro Hawaii Beach Tote Bag", category: "aloha", note: "Retro hibiscus tote for beach days.", added: "2026-11-25" },
  { id: "B079VWDL8M", name: "INGEAR Men's Stretch Hawaiian Shirt, Quick Dry", category: "aloha", note: "Stretch, quick-dry and machine washable.", added: "2026-11-24", pick: true },
  { id: "B01M7YVMCF", name: "Made in Hawaii 100% Cotton Men's Aloha Shirt", category: "aloha", note: "Hand made in Hawaii, with a matching pocket.", added: "2026-11-24" },

  // Koa & plumeria jewelry
  { id: "B0CKWZ3FMC", name: "Hawaiian Koa Wood & Bone Plumeria Bracelet or Anklet", category: "jewelry", note: "Hand-carved, fully adjustable bracelet or anklet.", added: "2026-11-24", pick: true },
  { id: "B06XGVZWMD", name: "Sterling Silver Koa Wood Plumeria Stud Earrings, 7 mm", category: "jewelry", note: "Small sterling studs with a koa wood plumeria.", added: "2026-11-25" },
  { id: "B0D7L8YHHF", name: "Sterling Silver Koa Wood & Abalone Plumeria Stud Earrings", category: "jewelry", note: "Koa and abalone shell plumeria with nickel-free posts.", added: "2026-11-25" },

  // Luau & party
  { id: "B0BY4BHXVZ", name: "60-Piece Hawaiian Luau Hula Skirts & Leis Pack", category: "party", note: "Skirts, leis and bracelets for a group party.", added: "2026-11-25", pick: true },
  { id: "B0D1CJFQ56", name: "Hawaiian Luau Costume Set with Hula Skirt and Leis", category: "party", note: "Skirt, top and lei accessories for the luau.", added: "2026-11-25" },
  { id: "B0H2DLM1YS", name: "9-Piece Hawaiian Costume Set with Pink Grass Skirt", category: "party", note: "Skirt, lei, flower glasses and party accessories.", added: "2026-11-25" },

  // Tropical home
  { id: "B0CW32RF83", name: "Fjfz Tiki & Monstera Throw Pillow Covers (Set of 4)", category: "home", note: "Aloha-themed covers for porch and sofa.", added: "2026-11-24" },
  { id: "B0H37ZTQFJ", name: "Tiki Mask Outdoor Pillow Covers, Water Resistant", category: "home", note: "Hibiscus and tiki pattern, made for outdoors.", added: "2026-11-24" },
  { id: "B0H336RMFF", name: "Tiki Bar Throw Pillow Covers, Hawaiian Hibiscus (Set of 2)", category: "home", note: "Retro hibiscus and ocean print for the sofa.", added: "2026-11-24" },
  { id: "B0GMP4LLDM", name: "Hawaiian Hibiscus Print Quilt Set (Bedspread with Shams)", category: "home", note: "Three-piece hibiscus quilt set with zipper closure.", added: "2026-11-25" },
  { id: "B0D9JC4P6Z", name: "Blue Hawaiian Flowers Throw Blanket, 40x50", category: "home", note: "Soft fleece throw with a blue hibiscus watercolor print.", added: "2026-11-25" },
  { id: "B0D3HW769M", name: "Floral Hawaiian Velvet Throw Blanket, Hibiscus", category: "home", note: "Super soft velvet throw for the couch or bed.", added: "2026-11-25" },

  // Books & photos
  { id: "166078929X", name: "Hawaii: Coffee Table Photography Travel Picture Book", category: "books", note: "Photo tour of the Hawaiian islands.", added: "2026-11-24", pick: true },
  { id: "B0DQDCMX1X", name: "Kauai Photobook: Coffee Table Book", category: "books", note: "Stunning images of Kauai's cities and landscapes.", added: "2026-11-24" },
  { id: "1777062144", name: "Hawaii: Photo Book (Wanderlust) by Elyse Booth", category: "books", note: "Big Island, Maui and Kauai in hardcover.", added: "2026-11-24" },
  { id: "1423467272", name: "Hawaiian Songs for Ukulele (Hal Leonard)", category: "books", note: "32 easy Hawaiian songs with lyrics and chords for ukulele.", added: "2026-11-25", pick: true },
  { id: "1095186469", name: "Easy Ukulele Songbook: Hawaiian Classics for Beginners", category: "books", note: "Beginner-friendly Hawaiian songs for ukulele.", added: "2026-11-25" },
  { id: "1783055626", name: "20 Classic Hawaiian Songs for Ukulele", category: "books", note: "Classic Hawaiian songs arranged for ukulele.", added: "2026-11-25" },
  { id: "0974256404", name: "He Mele Aloha: A Hawaiian Songbook (Carol Wilcox)", category: "books", note: "A large reference with over 260 Hawaiian songs.", added: "2026-11-25" },
  { id: "B0H3WGW44R", name: "Hawaii Travel Guide 2026: Oahu, Maui, Kauai and the Big Island", category: "books", note: "Beaches, volcano hikes, scenic drives and island tours.", added: "2026-11-25" },
  { id: "1640973168", name: "Fodor's Essential Hawaii (Full-color Travel Guide)", category: "books", note: "Maps and guides to all the main islands.", added: "2026-11-25" }
];
