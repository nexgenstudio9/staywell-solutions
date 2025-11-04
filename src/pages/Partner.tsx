import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Hotel,
  Calendar,
  DollarSign,
  Users,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const Partner = () => {
  const benefits = [
    {
      icon: Users,
      title: "เข้าถึงลูกค้ามากมาย",
      description: "เชื่อมต่อกับนักท่องเที่ยวนับล้านคนทั่วโลก",
    },
    {
      icon: BarChart3,
      title: "เครื่องมือจัดการที่ทรงพลัง",
      description: "Dashboard ที่ใช้งานง่าย ตรวจสอบได้แบบ real-time",
    },
    {
      icon: DollarSign,
      title: "เพิ่มรายได้",
      description: "ไม่มีค่าเริ่มต้น แบ่งรายได้ตามยอดจองจริง",
    },
    {
      icon: Calendar,
      title: "จัดการการจองอัตโนมัติ",
      description: "ระบบจัดการการจองที่มีประสิทธิภาพ",
    },
  ];

  const features = [
    "ระบบจัดการห้องพักและราคา",
    "ปฏิทินการจองแบบ real-time",
    "รายงานและสถิติการขาย",
    "ระบบรีวิวและคะแนน",
    "การตลาดและโปรโมชั่น",
    "การสื่อสารกับลูกค้า",
    "รับชำระเงินอัตโนมัติ",
    "ทีมสนับสนุน 24/7",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-secondary py-24 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            เติบโตไปกับ StayHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            เข้าร่วมกับที่พักกว่า 10,000 แห่งที่เชื่อใจเรา เพิ่มยอดจองและรายได้ของคุณวันนี้
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partner/register">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg">
                เริ่มต้นฟรีวันนี้
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/partner/dashboard">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg">
                เข้าสู่ระบบพาร์ทเนอร์
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ทำไมต้องเลือก StayHub?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              แพลตฟอร์มที่ครบครัน ช่วยให้คุณบริหารจัดการที่พักได้อย่างมีประสิทธิภาพ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ฟีเจอร์ครบครัน สำหรับธุรกิจของคุณ
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                เครื่องมือทุกอย่างที่คุณต้องการเพื่อจัดการที่พักของคุณให้ประสบความสำเร็จ
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ตัวเลขที่พูดแทนเรา
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">พาร์ทเนอร์</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50M+</div>
              <div className="text-muted-foreground">การจองต่อปี</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground">คะแนนพาร์ทเนอร์</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">อัตราความพึงพอใจ</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            พร้อมที่จะเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            ลงทะเบียนฟรีวันนี้ และเริ่มต้นรับการจองในไม่กี่นาที
          </p>
          <Link to="/partner/register">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg">
              เริ่มต้นเลย - ฟรี!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partner;
