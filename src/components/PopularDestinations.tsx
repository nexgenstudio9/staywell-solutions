import { Link } from "react-router-dom";

const destinations = [
  {
    name: "กรุงเทพฯ",
    properties: "2,547",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80",
  },
  {
    name: "ภูเก็ต",
    properties: "1,823",
    imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80",
  },
  {
    name: "เชียงใหม่",
    properties: "1,234",
    imageUrl: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=600&q=80",
  },
  {
    name: "พัทยา",
    properties: "1,456",
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80",
  },
  {
    name: "เกาะสมุย",
    properties: "892",
    imageUrl: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&q=80",
  },
  {
    name: "หัวหิน",
    properties: "678",
    imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">จุดหมายปลายทางยอดนิยม</h2>
          <p className="text-muted-foreground text-lg">
            สำรวจสถานที่ท่องเที่ยวที่ได้รับความนิยมสูงสุดในประเทศไทย
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((destination) => (
            <Link
              key={destination.name}
              to={`/search?destination=${encodeURIComponent(destination.name)}`}
              className="group relative h-48 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg mb-1">{destination.name}</h3>
                <p className="text-sm text-white/90">{destination.properties} ที่พัก</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
