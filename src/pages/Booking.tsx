import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, Building2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Booking = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  
  const propertyId = searchParams.get("propertyId");
  const roomId = searchParams.get("roomId");

  // Mock data
  const bookingData = {
    property: "Luxury Beachfront Villa",
    room: "ห้องดีลักซ์",
    checkIn: "15 ม.ค. 2025",
    checkOut: "18 ม.ค. 2025",
    nights: 3,
    pricePerNight: 3500,
    serviceFee: 250,
    tax: 375,
  };

  const total = bookingData.nights * bookingData.pricePerNight + bookingData.serviceFee + bookingData.tax;

  const handleBooking = () => {
    // Simulate booking process
    toast.success("การจองสำเร็จ!", {
      description: "เราได้ส่งอีเมลยืนยันไปให้คุณแล้ว",
    });
    setTimeout(() => {
      navigate("/confirmation");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">ยืนยันการจอง</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Guest Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">ข้อมูลผู้เข้าพัก</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">ชื่อ *</Label>
                    <Input id="firstName" placeholder="ชื่อ" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">นามสกุล *</Label>
                    <Input id="lastName" placeholder="นามสกุล" />
                  </div>
                  <div>
                    <Label htmlFor="email">อีเมล *</Label>
                    <Input id="email" type="email" placeholder="example@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                    <Input id="phone" type="tel" placeholder="0XX-XXX-XXXX" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Requests */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">คำขอพิเศษ</h2>
                <Label htmlFor="requests">คำขอพิเศษ (ถ้ามี)</Label>
                <Textarea
                  id="requests"
                  placeholder="เช่น ขอห้องชั้นสูง, ต้องการเตียงเสริม"
                  className="mt-2"
                  rows={4}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  * คำขอพิเศษขึ้นอยู่กับความพร้อมของที่พัก และอาจมีค่าใช้จ่ายเพิ่มเติม
                </p>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">วิธีการชำระเงิน</h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-accent">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                        <CreditCard className="h-5 w-5 text-primary" />
                        บัตรเครดิต/เดบิต
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-accent">
                      <RadioGroupItem value="promptpay" id="promptpay" />
                      <Label htmlFor="promptpay" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Smartphone className="h-5 w-5 text-primary" />
                        พร้อมเพย์
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-accent">
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                      <Label htmlFor="bank-transfer" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Building2 className="h-5 w-5 text-primary" />
                        โอนเงินผ่านธนาคาร
                      </Label>
                    </div>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit-card" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">หมายเลขบัตร</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">วันหมดอายุ</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" type="password" maxLength={3} />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">สรุปการจอง</h2>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="font-semibold">{bookingData.property}</p>
                    <p className="text-sm text-muted-foreground">{bookingData.room}</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>เช็คอิน:</span>
                      <span className="font-medium">{bookingData.checkIn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>เช็คเอาท์:</span>
                      <span className="font-medium">{bookingData.checkOut}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>จำนวน:</span>
                      <span className="font-medium">{bookingData.nights} คืน</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>฿{bookingData.pricePerNight.toLocaleString()} × {bookingData.nights} คืน</span>
                      <span>฿{(bookingData.pricePerNight * bookingData.nights).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ค่าบริการ</span>
                      <span>฿{bookingData.serviceFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ภาษี</span>
                      <span>฿{bookingData.tax.toLocaleString()}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>ยอดรวมทั้งหมด</span>
                    <span className="text-primary">฿{total.toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  onClick={handleBooking}
                  className="w-full h-12 text-lg bg-gradient-to-r from-secondary to-secondary-light hover:opacity-90"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  ยืนยันการจอง
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  โดยการดำเนินการต่อ คุณยอมรับ{" "}
                  <a href="#" className="text-primary hover:underline">
                    ข้อกำหนดและเงื่อนไข
                  </a>{" "}
                  ของเรา
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
