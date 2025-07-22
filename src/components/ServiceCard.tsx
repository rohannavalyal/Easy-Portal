import React from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  logo: string;
  url: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  logo,
  url,
  description,
}) => {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      className="service-card group cursor-pointer bg-[#1e1e1e] border border-gray-700 rounded-lg p-4 flex flex-col items-center shadow-sm transition-shadow duration-300 hover:shadow-md"
      onClick={handleClick}
    >
      <div className="w-16 h-16 rounded-lg mb-3 overflow-hidden bg-[#2a2a2a] flex items-center justify-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className="object-contain w-full h-full"
        />
      </div>
      <h4 className="font-medium text-center text-white">{name}</h4>
      <p className="text-xs text-gray-400 text-center mt-1">{description}</p>
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#3b82f6]">
        <span className="text-xs mr-1">Visit</span>
        <ArrowRight size={12} />
      </div>
    </Card>
  );
};

export default ServiceCard;
