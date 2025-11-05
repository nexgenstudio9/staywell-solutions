import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, ArrowLeft } from "lucide-react";

const AdminSEO = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [seoData, setSeoData] = useState({
    title: "",
    description: "",
    keywords: "",
  });

  useEffect(() => {
    loadSEOSettings();
  }, []);

  const loadSEOSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'seo')
        .maybeSingle();

      if (error) throw error;

      if (data?.value) {
        setSeoData(data.value as any);
      }
    } catch (error) {
      console.error('Error loading SEO settings:', error);
      toast.error('ไม่สามารถโหลดข้อมูล SEO');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('site_settings')
        .update({
          value: seoData,
          updated_at: new Date().toISOString(),
        })
        .eq('key', 'seo');

      if (error) throw error;

      toast.success('บันทึกการตั้งค่า SEO สำเร็จ');
    } catch (error) {
      console.error('Error saving SEO settings:', error);
      toast.error('ไม่สามารถบันทึกข้อมูล');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/admin')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          กลับ
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>SEO Settings</CardTitle>
            <CardDescription>
              จัดการข้อมูล SEO ของเว็บไซต์ Azure Sky Hotel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Page Title</Label>
              <Input
                id="title"
                value={seoData.title}
                onChange={(e) => setSeoData({ ...seoData, title: e.target.value })}
                placeholder="Azure Sky Hotel - Luxury Beachfront Resort"
              />
              <p className="text-sm text-muted-foreground">
                แนะนำ: ความยาวไม่เกิน 60 ตัวอักษร
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Meta Description</Label>
              <Textarea
                id="description"
                value={seoData.description}
                onChange={(e) => setSeoData({ ...seoData, description: e.target.value })}
                placeholder="Experience luxury at Azure Sky Hotel..."
                rows={4}
              />
              <p className="text-sm text-muted-foreground">
                แนะนำ: ความยาวไม่เกิน 160 ตัวอักษร
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                id="keywords"
                value={seoData.keywords}
                onChange={(e) => setSeoData({ ...seoData, keywords: e.target.value })}
                placeholder="luxury hotel, beachfront resort, ocean view"
              />
              <p className="text-sm text-muted-foreground">
                คั่นด้วยเครื่องหมายจุลภาค (,)
              </p>
            </div>

            <Button onClick={handleSave} disabled={saving} className="w-full">
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              บันทึกการตั้งค่า
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSEO;
