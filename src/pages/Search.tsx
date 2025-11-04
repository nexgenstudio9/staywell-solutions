import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

// Mock data
const mockSearchResults = [
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
  {
    id: "5",
    name: "Seaside Paradise Hotel",
    location: "ภูเก็ต, ประเทศไทย",
    price: 3200,
    rating: 4.8,
    reviews: 145,
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    amenities: ["wifi", "breakfast", "parking"],
  },
  {
    id: "6",
    name: "Urban Lifestyle Hotel",
    location: "กรุงเทพฯ, ประเทศไทย",
    price: 2800,
    rating: 4.5,
    reviews: 203,
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    amenities: ["wifi"],
  },
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("popular");
  
  const destination = searchParams.get("destination") || "ทั้งหมด";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            ที่พักใน {destination}
          </h1>
          <p className="text-muted-foreground">
            พบ {mockSearchResults.length} ที่พักที่ตรงกับเงื่อนไข
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-lg border p-6 space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b">
                <SlidersHorizontal className="h-5 w-5" />
                <h2 className="font-semibold text-lg">ตัวกรอง</h2>
              </div>

              {/* Price Range */}
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">ช่วงราคา</Label>
                  <div className="text-sm text-muted-foreground mb-4">
                    ฿{priceRange[0].toLocaleString()} - ฿{priceRange[1].toLocaleString()}
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={10000}
                    step={100}
                    className="mb-2"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">ประเภทที่พัก</Label>
                <div className="space-y-2">
                  {["โรงแรม", "รีสอร์ท", "วิลล่า", "อพาร์ทเมนท์"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm cursor-pointer">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">สิ่งอำนวยความสะดวก</Label>
                <div className="space-y-2">
                  {["Wi-Fi ฟรี", "อาหารเช้า", "ที่จอดรถ", "สระว่ายน้ำ", "ฟิตเนส"].map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox id={amenity} />
                      <label htmlFor={amenity} className="text-sm cursor-pointer">
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">คะแนนรีวิว</Label>
                <div className="space-y-2">
                  {["4.5+", "4.0+", "3.5+", "3.0+"].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={rating} />
                      <label htmlFor={rating} className="text-sm cursor-pointer">
                        {rating} ดาว
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full" variant="outline">
                ล้างตัวกรอง
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                แสดง {mockSearchResults.length} ผลลัพธ์
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="เรียงตาม" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">ยอดนิยม</SelectItem>
                  <SelectItem value="price-low">ราคา: ต่ำไปสูง</SelectItem>
                  <SelectItem value="price-high">ราคา: สูงไปต่ำ</SelectItem>
                  <SelectItem value="rating">คะแนนรีวิว</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockSearchResults.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <Button variant="outline" disabled>
                ก่อนหน้า
              </Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">
                ถัดไป
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
