import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hotel, User, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Hotel className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              StayHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/search" className="text-sm font-medium hover:text-primary transition-colors">
              ค้นหาที่พัก
            </Link>
            <Link to="/partner" className="text-sm font-medium hover:text-primary transition-colors">
              สำหรับพาร์ทเนอร์
            </Link>
            <Link to="/help" className="text-sm font-medium hover:text-primary transition-colors">
              ช่วยเหลือ
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                <User className="mr-2 h-4 w-4" />
                เข้าสู่ระบบ
              </Button>
            </Link>
            <Link to="/auth?tab=signup">
              <Button size="sm" className="bg-gradient-to-r from-primary to-primary-light hover:opacity-90">
                สมัครสมาชิก
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/search" className="text-sm font-medium hover:text-primary transition-colors">
                  ค้นหาที่พัก
                </Link>
                <Link to="/partner" className="text-sm font-medium hover:text-primary transition-colors">
                  สำหรับพาร์ทเนอร์
                </Link>
                <Link to="/help" className="text-sm font-medium hover:text-primary transition-colors">
                  ช่วยเหลือ
                </Link>
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                  <Link to="/auth">
                    <Button variant="outline" className="w-full">
                      เข้าสู่ระบบ
                    </Button>
                  </Link>
                  <Link to="/auth?tab=signup">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary-light">
                      สมัครสมาชิก
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
