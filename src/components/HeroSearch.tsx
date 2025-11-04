import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, MapPin, Calendar as CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import heroImage from "@/assets/hero-resort.jpg";

const HeroSearch = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    const params = new URLSearchParams({
      destination,
      checkIn: checkIn?.toISOString() || "",
      checkOut: checkOut?.toISOString() || "",
      guests: guests.toString(),
    });
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          ค้นหาที่พักในฝันของคุณ
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
          จองที่พักคุณภาพ กว่า 1,000,000 แห่งทั่วโลก
        </p>

        {/* Search Box */}
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Destination */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-foreground mb-2">
                จุดหมายปลายทาง
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="กรุงเทพ, ภูเก็ต..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Check-in */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-foreground mb-2">
                เช็คอิน
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-12 justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    {checkIn ? format(checkIn, "PP", { locale: th }) : "เลือกวันที่"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-out */}
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-foreground mb-2">
                เช็คเอาท์
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-12 justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    {checkOut ? format(checkOut, "PP", { locale: th }) : "เลือกวันที่"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => !checkIn || date <= checkIn}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                ผู้เข้าพัก
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1 flex items-end">
              <Button
                onClick={handleSearch}
                className="w-full h-12 bg-gradient-to-r from-secondary to-secondary-light hover:opacity-90 text-white"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
