import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Hotel,
  Calendar,
  DollarSign,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Plus,
  Settings,
} from "lucide-react";

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const stats = {
    totalBookings: 156,
    pendingBookings: 8,
    revenue: 487500,
    occupancyRate: 78,
    avgRating: 4.7,
    totalReviews: 89,
  };

  const recentBookings = [
    {
      id: "BK-2024-001",
      guest: "สมชาย ใจดี",
      room: "ห้องดีลักซ์",
      checkIn: "20 ม.ค. 2025",
      checkOut: "23 ม.ค. 2025",
      status: "confirmed",
      amount: 10500,
    },
    {
      id: "BK-2024-002",
      guest: "สมหญิง รักดี",
      room: "ห้องสวีท",
      checkIn: "22 ม.ค. 2025",
      checkOut: "25 ม.ค. 2025",
      status: "pending",
      amount: 16500,
    },
    {
      id: "BK-2024-003",
      guest: "John Smith",
      room: "ห้องดีลักซ์",
      checkIn: "18 ม.ค. 2025",
      checkOut: "21 ม.ค. 2025",
      status: "confirmed",
      amount: 10500,
    },
  ];

  const properties = [
    {
      id: "1",
      name: "Luxury Beachfront Villa",
      location: "ภูเก็ต",
      rooms: 12,
      avgRating: 4.9,
      bookings: 45,
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      cancelled: "bg-red-100 text-red-800",
    };
    const labels = {
      confirmed: "ยืนยันแล้ว",
      pending: "รอยืนยัน",
      cancelled: "ยกเลิก",
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Partner Dashboard</h1>
            <p className="text-muted-foreground">จัดการที่พักและการจองของคุณ</p>
          </div>
          <div className="flex gap-3">
            <Link to="/partner/property/new">
              <Button className="bg-gradient-to-r from-primary to-primary-light">
                <Plus className="mr-2 h-4 w-4" />
                เพิ่มที่พัก
              </Button>
            </Link>
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              ตั้งค่า
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                การจองทั้งหมด
              </CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalBookings}</div>
              <p className="text-xs text-muted-foreground mt-1">
                +12% จากเดือนที่แล้ว
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                รออนุมัติ
              </CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.pendingBookings}</div>
              <p className="text-xs text-muted-foreground mt-1">
                ต้องดำเนินการ
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                รายได้
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">฿{stats.revenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                เดือนนี้
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                อัตราการเข้าพัก
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.occupancyRate}%</div>
              <p className="text-xs text-muted-foreground mt-1">
                +5% จากเดือนที่แล้ว
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
            <TabsTrigger value="bookings">การจอง</TabsTrigger>
            <TabsTrigger value="properties">ที่พัก</TabsTrigger>
            <TabsTrigger value="analytics">สถิติ</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Recent Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>การจองล่าสุด</CardTitle>
                <CardDescription>รายการจองที่เพิ่งเข้ามาใหม่</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-semibold">{booking.id}</span>
                          {getStatusBadge(booking.status)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {booking.guest} • {booking.room}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {booking.checkIn} - {booking.checkOut}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">
                          ฿{booking.amount.toLocaleString()}
                        </div>
                        {booking.status === "pending" && (
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" variant="outline">
                              <XCircle className="h-4 w-4 mr-1" />
                              ปฏิเสธ
                            </Button>
                            <Button size="sm">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              อนุมัติ
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>การจองทั้งหมด</CardTitle>
                <CardDescription>จัดการการจองของคุณ</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">ระบบจัดการการจองจะแสดงที่นี่</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="properties">
            <Card>
              <CardHeader>
                <CardTitle>ที่พักของคุณ</CardTitle>
                <CardDescription>จัดการข้อมูลที่พัก</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Hotel className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{property.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {property.location} • {property.rooms} ห้อง
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{property.bookings} การจอง</span>
                        </div>
                        <Button size="sm" variant="outline">
                          จัดการ
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>สถิติและรายงาน</CardTitle>
                <CardDescription>ดูข้อมูลเชิงลึกของธุรกิจคุณ</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">กราฟและสถิติจะแสดงที่นี่</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PartnerDashboard;
