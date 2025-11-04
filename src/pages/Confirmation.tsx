import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, Mail, MapPin } from "lucide-react";

const Confirmation = () => {
  // Mock data
  const booking = {
    id: "BK-2025-00123",
    property: "Luxury Beachfront Villa",
    room: "ห้องดีลักซ์",
    address: "123 Beach Road, Patong, ภูเก็ต 83150",
    checkIn: "15 ม.ค. 2025",
    checkOut: "18 ม.ค. 2025",
    nights: 3,
    guests: 2,
    totalAmount: 11125,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex p-6 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">จองสำเร็จ!</h1>
            <p className="text-muted-foreground">
              เราได้ส่งอีเมลยืนยันไปที่อีเมลของคุณแล้ว
            </p>
          </div>

          {/* Booking Details Card */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="mb-6 pb-6 border-b">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-xl font-bold">{booking.property}</h2>
                    <p className="text-muted-foreground">{booking.room}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">หมายเลขการจอง</p>
                    <p className="font-mono font-bold">{booking.id}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>{booking.address}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">เช็คอิน</p>
                    <p className="font-semibold">{booking.checkIn}</p>
                    <p className="text-xs text-muted-foreground">หลัง 14:00</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">เช็คเอาท์</p>
                    <p className="font-semibold">{booking.checkOut}</p>
                    <p className="text-xs text-muted-foreground">ก่อน 12:00</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">จำนวนคืน</p>
                    <p className="font-semibold">{booking.nights} คืน</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">จำนวนผู้เข้าพัก</p>
                    <p className="font-semibold">{booking.guests} คน</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">ยอดชำระทั้งหมด</span>
                  <span className="text-2xl font-bold text-primary">
                    ฿{booking.totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Button variant="outline" className="h-12">
              <Download className="mr-2 h-4 w-4" />
              ดาวน์โหลดใบยืนยัน
            </Button>
            <Button variant="outline" className="h-12">
              <Mail className="mr-2 h-4 w-4" />
              ส่งอีเมลอีกครั้ง
            </Button>
          </div>

          {/* Next Steps */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4">ขั้นตอนต่อไป</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>ตรวจสอบอีเมลยืนยันของคุณ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>เตรียมเอกสารแสดงตัวตนสำหรับการเช็คอิน</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>คุณสามารถยกเลิกการจองฟรีภายใน 24 ชั่วโมงก่อนเช็คอิน</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light">
                กลับสู่หน้าหลัก
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
