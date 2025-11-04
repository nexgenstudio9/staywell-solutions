import PropertyCard from "./PropertyCard";

// Mock data - in real app this would come from database
const mockProperties = [
  {
    id: "1",
    name: "Luxury Beachfront Villa",
    location: "ภูเก็ต, ประเทศไทย",
    price: 4500,
    rating: 4.9,
    reviews: 128,
    imageUrl: "https://images.unsplash.com/photo-1582610116397-edb318620f90?w=800&q=80",
    amenities: ["wifi", "breakfast", "parking"],
  },
  {
    id: "2",
    name: "Modern City Hotel",
    location: "กรุงเทพฯ, ประเทศไทย",
    price: 2200,
    rating: 4.7,
    reviews: 256,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    amenities: ["wifi", "breakfast"],
  },
  {
    id: "3",
    name: "Cozy Mountain Resort",
    location: "เชียงใหม่, ประเทศไทย",
    price: 1800,
    rating: 4.8,
    reviews: 92,
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    amenities: ["wifi", "parking"],
  },
  {
    id: "4",
    name: "Riverside Boutique Hotel",
    location: "อยุธยา, ประเทศไทย",
    price: 1500,
    rating: 4.6,
    reviews: 74,
    imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    amenities: ["wifi", "breakfast", "parking"],
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ที่พักยอดนิยม</h2>
          <p className="text-muted-foreground text-lg">
            สำรวจที่พักคุณภาพที่ได้รับความนิยมสูงสุด
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
