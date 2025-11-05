import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          setIsAdmin(false);
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .eq('role', 'admin')
          .maybeSingle();

        if (error) {
          console.error('Error checking admin status:', error);
          setIsAdmin(false);
        } else {
          setIsAdmin(!!data);
        }
      } catch (error) {
        console.error('Error:', error);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Azure Sky Hotel Management System</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/admin/seo"
            className="p-6 border rounded-lg hover:shadow-lg transition-all hover:border-primary"
          >
            <h3 className="text-xl font-semibold mb-2">SEO Settings</h3>
            <p className="text-muted-foreground">จัดการ Title, Description, Keywords</p>
          </Link>

          <Link
            to="/admin/theme"
            className="p-6 border rounded-lg hover:shadow-lg transition-all hover:border-primary"
          >
            <h3 className="text-xl font-semibold mb-2">Theme Settings</h3>
            <p className="text-muted-foreground">ปรับแต่งสี และธีมของเว็บไซต์</p>
          </Link>

          <Link
            to="/admin/content"
            className="p-6 border rounded-lg hover:shadow-lg transition-all hover:border-primary"
          >
            <h3 className="text-xl font-semibold mb-2">Content Management</h3>
            <p className="text-muted-foreground">แก้ไขเนื้อหาหน้าเว็บ</p>
          </Link>

          <Link
            to="/admin/users"
            className="p-6 border rounded-lg hover:shadow-lg transition-all hover:border-primary"
          >
            <h3 className="text-xl font-semibold mb-2">User Management</h3>
            <p className="text-muted-foreground">จัดการสมาชิกและสิทธิ์การเข้าถึง</p>
          </Link>

          <Link
            to="/admin/rooms"
            className="p-6 border rounded-lg hover:shadow-lg transition-all hover:border-primary"
          >
            <h3 className="text-xl font-semibold mb-2">Room Management</h3>
            <p className="text-muted-foreground">จัดการประเภทห้องพัก</p>
          </Link>

          <Link
            to="/admin/bookings"
            className="p-6 border rounded-lg hover:shadow-lg transition-all hover:border-primary"
          >
            <h3 className="text-xl font-semibold mb-2">Booking Management</h3>
            <p className="text-muted-foreground">ดูและจัดการการจอง</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
