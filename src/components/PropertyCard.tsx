import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Coffee, ParkingCircle } from "lucide-react";

interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  amenities?: string[];
}

const PropertyCard = ({
  id,
  name,
  location,
  price,
  rating,
  reviews,
  imageUrl,
  amenities = [],
}: PropertyCardProps) => {
  const amenityIcons: Record<string, any> = {
    wifi: Wifi,
    breakfast: Coffee,
    parking: ParkingCircle,
  };

  return (
    <Link to={`/property/${id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge className="bg-white text-foreground font-semibold shadow-md">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
              {rating}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{location}</span>
          </div>

          {amenities.length > 0 && (
            <div className="flex gap-2 mb-3">
              {amenities.slice(0, 3).map((amenity) => {
                const Icon = amenityIcons[amenity.toLowerCase()];
                return Icon ? (
                  <div key={amenity} className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Icon className="h-3 w-3" />
                  </div>
                ) : null;
              })}
            </div>
          )}

          <div className="flex items-baseline justify-between pt-3 border-t">
            <div>
              <span className="text-2xl font-bold text-primary">฿{price.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground ml-1">/คืน</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({reviews} รีวิว)
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
