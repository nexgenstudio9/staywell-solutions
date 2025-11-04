import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  MapPin,
  Wifi,
  Coffee,
  ParkingCircle,
  Dumbbell,
  Wind,
  Tv,
  ShieldCheck,
  Clock,
} from "lucide-react";

const Property = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  // Mock data - in real app this would be fetched based on id
  const property = {
    name: "Luxury Beachfront Villa",
    location: "123 Beach Road, Patong, ภูเก็ต 83150, ประเทศไทย",
    rating: 4.9,
    reviews: 128,
    description: "พักผ่อนในบรรยากาศหรูหราริมชายหาด ห้องพักทุกห้องมีวิวทะเลสวยงาม พร้อมสิ่งอำนวยความสะดวกครบครัน ห่างจากสนามบินภูเก็ตเพียง 45 นาที",
    amenities: [
      { icon: Wifi, label: "Wi-Fi ฟรี" },
      { icon: Coffee, label: "อาหารเช้า" },
      { icon: ParkingCircle, label: "ที่จอดรถฟรี" },
      { icon: Dumbbell, label: "ฟิตเนส" },
      { icon: Wind, label: "เครื่องปรับอากาศ" },
      { icon: Tv, label: "ทีวี" },
    ],
    images: [
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
    ],
    rooms: [
      {
        id: "deluxe",
        name: "ห้องดีลักซ์",
        price: 3500,
        capacity: 2,
        size: 35,
        amenities: ["เตียงคิงไซส์", "ระเบียงส่วนตัว", "วิวทะเล"],
      },
      {
        id: "suite",
        name: "ห้องสวีท",
        price: 5500,
        capacity: 4,
        size: 55,
        amenities: ["เตียงคิงไซส์ 2 เตียง", "ห้องนั่งเล่น", "วิวทะเล", "อ่างอาบน้ำ"],
      },
    ],
    checkInTime: "14:00",
    checkOutTime: "12:00",
    cancellationPolicy: "ยกเลิกฟรีภายใน 24 ชั่วโมงก่อนเช็คอิน",
  };

  const handleBooking = () => {
    if (selectedRoom) {
      navigate(`/booking?propertyId=${id}&roomId=${selectedRoom}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Property Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{property.rating}</span>
              <span className="text-muted-foreground">({property.reviews} รีวิว)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-2 mb-8 h-[400px]">
          <div className="col-span-4 md:col-span-2 row-span-2">
            <img
              src={property.images[0]}
              alt="Main"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {property.images.slice(1).map((img, idx) => (
            <div key={idx} className="col-span-2 md:col-span-1">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">รายละเอียด</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">สิ่งอำนวยความสะดวก</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <amenity.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rooms */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">เลือกห้องพัก</h2>
                <div className="space-y-4">
                  {property.rooms.map((room) => (
                    <div
                      key={room.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedRoom === room.id
                          ? "border-primary bg-accent"
                          : "hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedRoom(room.id)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{room.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {room.capacity} คน • {room.size} ตร.ม.
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            ฿{room.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">/คืน</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">นโยบาย</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">เวลาเช็คอิน/เช็คเอาท์</p>
                      <p className="text-sm text-muted-foreground">
                        เช็คอิน: {property.checkInTime} • เช็คเอาท์: {property.checkOutTime}
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">นโยบายการยกเลิก</p>
                      <p className="text-sm text-muted-foreground">
                        {property.cancellationPolicy}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-1">เริ่มต้น</div>
                  <div className="text-3xl font-bold text-primary">
                    ฿{Math.min(...property.rooms.map(r => r.price)).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">/คืน</div>
                </div>

                <Separator className="my-6" />

                {selectedRoom ? (
                  <div className="mb-6 p-4 bg-accent rounded-lg">
                    <p className="text-sm font-medium mb-1">ห้องที่เลือก:</p>
                    <p className="font-semibold">
                      {property.rooms.find(r => r.id === selectedRoom)?.name}
                    </p>
                  </div>
                ) : (
                  <div className="mb-6 p-4 bg-muted rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">
                      กรุณาเลือกห้องพัก
                    </p>
                  </div>
                )}

                <Button
                  onClick={handleBooking}
                  disabled={!selectedRoom}
                  className="w-full h-12 text-lg bg-gradient-to-r from-secondary to-secondary-light hover:opacity-90"
                >
                  จองเลย
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  คุณจะไม่ถูกเรียกเก็บเงินในตอนนี้
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
