import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hotel, User, Menu, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async (userId: string) => {
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();
    
    setIsAdmin(!!data);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Hotel className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Azure Sky Hotel
            </span>
          </Link>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="ghost" size="sm">
                      <Shield className="mr-2 h-4 w-4" />
                      Admin
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  ออกจากระบบ
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
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
                {user ? (
                  <>
                    {isAdmin && (
                      <Link to="/admin" className="text-sm font-medium hover:text-primary transition-colors">
                        Admin Panel
                      </Link>
                    )}
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                      <Button variant="outline" className="w-full" onClick={handleSignOut}>
                        ออกจากระบบ
                      </Button>
                    </div>
                  </>
                ) : (
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
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
