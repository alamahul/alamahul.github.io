import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { profileData } from "../mock/profileData";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Mail, Phone, Linkedin, CheckCircle2 } from "lucide-react";

function Contact() {
  const { language } = useLanguage();
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = React.useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    stored.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("contactMessages", JSON.stringify(stored));

    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="space-y-8">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-start">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
              {language === "en" ? "Contact" : "Kontak"}
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
              {language === "en"
                ? "Let's talk about your next web project"
                : "Mari bicarakan proyek web yang ingin Anda bangun"}
            </h1>
            <p className="text-sm text-slate-400 max-w-xl">
              {language === "en"
                ? "I'm open to collaboration, freelance opportunities, internships, or just a conversation about web development and AI."
                : "Saya terbuka untuk kolaborasi, peluang freelance, magang, atau sekadar berdiskusi tentang web development dan AI."}
            </p>
          </div>

          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="p-4 space-y-3 text-xs">
              <p className="text-slate-300">
                {language === "en"
                  ? "You can reach me directly through these channels:"
                  : "Anda dapat menghubungi saya langsung melalui kanal berikut:"}
              </p>
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 text-slate-200">
                  <Mail className="h-4 w-4 text-emerald-300" />
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="hover:text-emerald-300 transition-colors"
                  >
                    {profileData.contact.email}
                  </a>
                  <Badge className="bg-slate-900 border-slate-700 text-[10px] text-slate-300 px-2 py-0.5">
                    Email
                  </Badge>
                </div>
                <div className="inline-flex items-center gap-2 text-slate-200">
                  <Phone className="h-4 w-4 text-emerald-300" />
                  <span>{profileData.contact.phone}</span>
                  <Badge className="bg-slate-900 border-slate-700 text-[10px] text-slate-300 px-2 py-0.5">
                    WhatsApp
                  </Badge>
                </div>
                <div className="inline-flex items-center gap-2 text-slate-200">
                  <Linkedin className="h-4 w-4 text-emerald-300" />
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-300 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-slate-800 bg-slate-900/60">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center justify-between gap-2 mb-1">
              <p className="text-sm font-medium text-slate-50">
                {language === "en" ? "Send a quick message" : "Kirim pesan singkat"}
              </p>
              {status === "success" && (
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {language === "en" ? "Saved locally" : "Tersimpan di browser"}
                </span>
              )}
              {status === "error" && (
                <span className="text-[11px] text-red-400">
                  {language === "en"
                    ? "Please fill all fields."
                    : "Mohon isi semua field."}
                </span>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div className="space-y-1.5">
                <label className="text-slate-200" htmlFor="name">
                  {language === "en" ? "Name" : "Nama"}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={
                    language === "en" ? "Your name" : "Nama lengkap Anda"
                  }
                  className="bg-slate-950 border-slate-700 text-slate-50 placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-200" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-slate-950 border-slate-700 text-slate-50 placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-200" htmlFor="message">
                  {language === "en" ? "Message" : "Pesan"}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={
                    language === "en"
                      ? "Tell me a bit about your project or what you need..."
                      : "Ceritakan sedikit tentang proyek atau kebutuhan Anda..."
                  }
                  className="bg-slate-950 border-slate-700 text-slate-50 placeholder:text-slate-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="mt-1 w-full bg-emerald-400 text-slate-950 hover:bg-emerald-300 font-semibold rounded-full text-xs py-2"
              >
                {language === "en" ? "Send message" : "Kirim pesan"}
              </Button>

              <p className="text-[11px] text-slate-500 mt-1">
                {language === "en"
                  ? "For now, your message will be stored only in your browser as a demo. In the next step, we can connect this form to a real backend or email service."
                  : "Untuk saat ini, pesan Anda hanya disimpan di browser sebagai demo. Pada tahap berikutnya, form ini bisa dihubungkan ke backend atau layanan email yang sesungguhnya."}
              </p>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default Contact;
