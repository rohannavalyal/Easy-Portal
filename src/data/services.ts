import {
  Tv,
  ShoppingCart,
  Utensils,
  Clock,
  MapPin,
  Gamepad,
  type LucideIcon,
} from "lucide-react";

// Category Type with Icon Component
export type Category = {
  id: CategoryId;
  name: string;
  icon: LucideIcon;
  description: string;
};

// Extracting Category IDs as a union type
export type CategoryId =
  | "entertainment"
  | "shopping"
  | "food"
  | "groceries"
  | "travel"
  | "gaming";

// Service Type with Category ID tied to existing categories
export type Service = {
  id: string;
  name: string;
  logo: string;
  url: string;
  description: string;
  categoryId: CategoryId;
};

// Categories Array with Icons
export const categories: Category[] = [
  {
    id: "entertainment",
    name: "Entertainment",
    icon: Tv,
    description: "Streaming services, video platforms, and more",
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: ShoppingCart,
    description: "E-commerce platforms and online stores",
  },
  {
    id: "food",
    name: "Food Delivery",
    icon: Utensils,
    description: "Food delivery services for all your cravings",
  },
  {
    id: "groceries",
    name: "Instant Delivery",
    icon: Clock,
    description: "Quick delivery services for groceries and essentials",
  },
  {
    id: "travel",
    name: "Travel",
    icon: MapPin,
    description: "Airlines, hotels, and travel booking services",
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad,
    description: "Online gaming platforms and services",
  },
];

// Services Array
export const services: Service[] = [
  // Entertainment
  {
    id: "netflix",
    name: "Netflix",
    logo: "/netflix.png",
    url: "https://www.netflix.com",
    description: "Stream TV shows and movies",
    categoryId: "entertainment",
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "/spotify.png",
    url: "https://www.spotify.com",
    description: "Music streaming service",
    categoryId: "entertainment",
  },
  {
    id: "youtube",
    name: "YouTube",
    logo: "/youtube.jpg",
    url: "https://www.youtube.com",
    description: "Video sharing platform",
    categoryId: "entertainment",
  },
  {
    id: "disney",
    name: "Jio Hotstar",
    logo: "/hotstar.jpeg",
    url: "https://www.disneyplus.com",
    description: "Movie, Series and TV streaming service",
    categoryId: "entertainment",
  },

  // Shopping
  {
    id: "amazon",
    name: "Amazon",
    logo: "/amazon.jpg",
    url: "https://www.amazon.com",
    description: "Online shopping platform",
    categoryId: "shopping",
  },
  {
    id: "flipkart",
    name: "Flipkart",
    logo: "/flipkart.png",
    url: "https://www.flipkart.com",
    description: "E-commerce shopping website",
    categoryId: "shopping",
  },
  {
    id: "etsy",
    name: "Myntra",
    logo: "/myntra.png",
    url: "https://www.myntra.com",
    description: "E-commerce shopping platform",
    categoryId: "shopping",
  },
  {
    id: "ebay",
    name: "eBay",
    logo: "/ebay.png",
    url: "https://www.ebay.com",
    description: "Online auction and shopping",
    categoryId: "shopping",
  },

  // Food
  {
    id: "swiggy",
    name: "Swiggy",
    logo: "/Swiggy_logo.png",
    url: "https://www.swiggy.com",
    description: "Online food delivery",
    categoryId: "food",
  },
  {
    id: "zomato",
    name: "Zomato",
    logo: "/zomato.jpg",
    url: "https://www.zomato.com",
    description: "Restaurant finder and food delivery",
    categoryId: "food",
  },
  {
    id: "doordash",
    name: "MagicPin",
    logo: "/magicpin.png",
    url: "https://www.magicpin.com/",
    description: "Food delivery service",
    categoryId: "food",
  },
  {
    id: "ubereats",
    name: "Eat Sure",
    logo: "/eatsure.jpeg",
    url: "https://www.eatsure.com",
    description: "Food delivery platform",
    categoryId: "food",
  },

  // Groceries
  {
    id: "zepto",
    name: "Zepto",
    logo: "/zepto.png",
    url: "https://www.zepto.com",
    description: "10-minute grocery delivery",
    categoryId: "groceries",
  },
  {
    id: "blinkit",
    name: "Blinkit",
    logo: "/blinkit.png",
    url: "https://www.blinkit.com",
    description: "Quick commerce platform",
    categoryId: "groceries",
  },
  {
    id: "instacart",
    name: "Swiggy Instamart",
    logo: "/swiggy_insta.jpeg",
    url: "https://www.swiggy.com/instamart",
    description: "Grocery delivery service",
    categoryId: "groceries",
  },
  {
    id: "gopuff",
    name: "Big Basket",
    logo: "/bb.png",
    url: "https://www.bigbasket.com",
    description: "Instant needs delivery",
    categoryId: "groceries",
  },

  // Travel
  {
    id: "booking",
    name: "Booking.com",
    logo: "/booking.svg",
    url: "https://www.booking.com",
    description: "Hotel reservations",
    categoryId: "travel",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    logo: "/airbnb-logo.png",
    url: "https://www.airbnb.com",
    description: "Vacation rentals",
    categoryId: "travel",
  },
  {
    id: "expedia",
    name: "Expedia",
    logo: "/Expedia_Icon_2022.svg.png",
    url: "https://www.expedia.com",
    description: "Travel booking website",
    categoryId: "travel",
  },
  {
    id: "makemytrip",
    name: "MakeMyTrip",
    logo: "/mmt.png",
    url: "https://www.makemytrip.com",
    description: "Travel company",
    categoryId: "travel",
  },

  // Gaming
  {
    id: "steam",
    name: "Steam",
    logo: "/steam.png",
    url: "https://store.steampowered.com",
    description: "Digital game distribution",
    categoryId: "gaming",
  },
  {
    id: "epicgames",
    name: "Epic Games",
    logo: "/Epic_Games_logo.png",
    url: "https://www.epicgames.com",
    description: "Game store and engine creator",
    categoryId: "gaming",
  },
  {
    id: "xboxgamepass",
    name: "Xbox Game Pass",
    logo: "/xbox-game-pass-logo-png_seeklogo-389147.png",
    url: "https://www.xbox.com/xbox-game-pass",
    description: "Game subscription service",
    categoryId: "gaming",
  },
  {
    id: "playstation",
    name: "PlayStation",
    logo: "/ps.png",
    url: "https://www.playstation.com",
    description: "Gaming platform",
    categoryId: "gaming",
  },
];

// Utility: Get services by category
export const getServicesByCategory = (categoryId: CategoryId): Service[] =>
  services.filter((service) => service.categoryId === categoryId);

// Utility: Get a category by its ID
export const getCategoryById = (id: CategoryId): Category | undefined =>
  categories.find((cat) => cat.id === id);

// Utility: Get category select options
export const categoryOptions = categories.map(({ id, name }) => ({
  value: id,
  label: name,
}));
