import React from "react";
import { cn } from "@/lib/utils";
import {
  Home,
  ShoppingCart,
  Utensils,
  Clock,
  MapPin,
  Gamepad,
  Tv,
} from "lucide-react";

const icons = {
  home: Home,
  "shopping-cart": ShoppingCart,
  utensils: Utensils,
  clock: Clock,
  "map-pin": MapPin,
  gamepad: Gamepad,
  tv: Tv,
};

type IconKey = keyof typeof icons;

interface CategoryCardProps {
  name: string;
  icon: IconKey;
  isActive: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  icon,
  isActive,
  onClick,
}) => {
  const Icon = icons[icon] || Home;

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-l-md transition-colors duration-200 focus:outline-none",
        isActive
          ? "bg-blue-600 text-white border-l-4 border-blue-400 font-semibold shadow-lg"
          : "bg-gray-800 text-gray-300 border-l-4 border-transparent hover:bg-gray-700"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon size={20} />
      <span className="text-sm py-3">{name}</span>
    </button>
  );
};

export default CategoryCard;
