import Navbar from "@/components/Navbar";
import HeroSearch from "@/components/HeroSearch";
import FeaturedProperties from "@/components/FeaturedProperties";
import PopularDestinations from "@/components/PopularDestinations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSearch />
        <FeaturedProperties />
        <PopularDestinations />
        
        {/* Trust Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">ที่พักทั่วโลก</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5M+</div>
                <div className="text-muted-foreground">การจองสำเร็จ</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                <div className="text-muted-foreground">คะแนนเฉลี่ย</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">บริการลูกค้า</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">เกี่ยวกับ StayHub</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">เกี่ยวกับเรา</a></li>
                  <li><a href="#" className="hover:text-primary">ทีมงาน</a></li>
                  <li><a href="#" className="hover:text-primary">ร่วมงานกับเรา</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">สำหรับลูกค้า</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">วิธีการจอง</a></li>
                  <li><a href="#" className="hover:text-primary">นโยบายการยกเลิก</a></li>
                  <li><a href="#" className="hover:text-primary">คำถามที่พบบ่อย</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">สำหรับพาร์ทเนอร์</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/partner" className="hover:text-primary">ลงทะเบียนที่พัก</a></li>
                  <li><a href="#" className="hover:text-primary">คู่มือพาร์ทเนอร์</a></li>
                  <li><a href="#" className="hover:text-primary">ติดต่อฝ่ายขาย</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">ติดต่อเรา</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">support@stayhub.com</a></li>
                  <li><a href="#" className="hover:text-primary">02-XXX-XXXX</a></li>
                  <li><a href="#" className="hover:text-primary">ศูนย์ช่วยเหลือ</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-muted-foreground">
              <p>© 2025 StayHub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
