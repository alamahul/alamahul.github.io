import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";
import { profileData } from "../mock/profileData";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Mail, Phone, Linkedin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

function Contact() {
  const { language } = useLanguage();
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErrorMessage(language === "en" ? "Please fill in all fields." : "Mohon isi semua kolom.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
          setErrorMessage(
            language === "en"
              ? "Failed to send message. Please try again later."
              : "Gagal mengirim pesan. Silakan coba lagi nanti."
          );
        }
      );
  };

  return (
    <section id="contact" className="py-20 scroll-mt-16 mb-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">

        {/* Bagian Kiri (Info Kontak) - Sama seperti sebelumnya */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              {language === "en" ? "CONTACT" : "KONTAK"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
              {language === "en" ? "Let's talk about your next project" : "Mari bicarakan proyek masa depan Anda"}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === "en"
                ? "I'm open to collaboration, freelance opportunities, or just a conversation about web development and AI."
                : "Saya terbuka untuk kolaborasi, peluang freelance, atau sekadar berdiskusi tentang pengembangan web dan AI."}
            </p>
          </div>

          <Card className="border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
            <CardContent className="p-6 space-y-5">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                {language === "en" ? "Direct Channels:" : "Kanal Langsung:"}
              </p>
              <div className="space-y-4">
                <a href={`mailto:${profileData.contact.email}`} className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {profileData.contact.email}
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">{profileData.contact.phone}</span>
                </div>
                <a href={profileData.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    LinkedIn Profile
                  </span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bagian Kanan (Form) */}
        <Card className="border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40 shadow-lg">
          <CardContent className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                {language === "en" ? "Send a Message" : "Kirim Pesan"}
              </h3>

              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 p-3 rounded-lg border border-emerald-100 dark:border-emerald-500/20">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>
                    {language === "en"
                      ? "Message sent successfully! I'll get back to you soon."
                      : "Pesan berhasil terkirim! Saya akan segera membalasnya."}
                  </span>
                </div>
              )}

              {status === "error" && errorMessage && (
                <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 p-3 rounded-lg border border-red-100 dark:border-red-500/20">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">
                  {language === "en" ? "Name" : "Nama"}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  placeholder={language === "en" ? "John Doe" : "Nama lengkap"}
                  className="h-11 bg-white border-slate-200 text-slate-900 focus:border-emerald-500 focus:ring-emerald-500/20 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-50 dark:placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  placeholder="name@example.com"
                  className="h-11 bg-white border-slate-200 text-slate-900 focus:border-emerald-500 focus:ring-emerald-500/20 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-50 dark:placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">
                  {language === "en" ? "Message" : "Pesan"}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  placeholder={language === "en" ? "Tell me about your project..." : "Ceritakan detail kebutuhan Anda..."}
                  className="bg-white border-slate-200 text-slate-900 focus:border-emerald-500 focus:ring-emerald-500/20 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-50 dark:placeholder:text-slate-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-11 bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 font-bold rounded-full transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {language === "en" ? "Sending..." : "Mengirim..."}
                  </>
                ) : (
                  language === "en" ? "Send Message" : "Kirim Pesan"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact;