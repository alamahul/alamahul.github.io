import React from "react";
import { ArrowRight, Code2, Cpu, Sparkles } from "lucide-react";
import { profileData, getLocalizedText } from "../mock/profileData";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

function Home() {
  const { language } = useLanguage();

  const heroTitle =
    language === "en"
      ? "Web Developer & AI Enthusiast from Garut"
      : "Web Developer & AI Enthusiast dari Garut";

  const heroSubtitle = getLocalizedText(profileData.tagline, language);
  const ctaPrimary = language === "en" ? "View projects" : "Lihat proyek";
  const ctaSecondary = language === "en" ? "Get in touch" : "Hubungi saya";
  const services = profileData.services;

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center py-12 lg:py-20 animate-in-up"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="space-y-20 lg:space-y-28">

        {/* HERO SECTION (Gabungan Teks, Foto, dan Kartu Fokus) */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* KOLOM KIRI: Teks & Tombol */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              {/* Badge Status */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 text-emerald-700 px-4 py-1.5 text-sm font-medium dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/30 justify-center lg:justify-start">
                <Sparkles className="h-4 w-4" />
                <span>
                  {language === "en"
                    ? "Informatics student building meaningful apps"
                    : "Mahasiswa Informatika membangun aplikasi bermakna"}
                </span>
              </div>

              {/* Judul Utama */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                {profileData.name}
              </h1>

              {/* Subjudul Warna */}
              <p className="text-xl sm:text-2xl font-light text-slate-600 dark:text-slate-400">
                Web Developer &{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  AI Enthusiast
                </span>
              </p>

              {/* Deskripsi */}
              <p className="max-w-xl text-base text-slate-600 dark:text-slate-300 leading-relaxed mx-auto lg:mx-0">
                {heroSubtitle}
              </p>
            </div>

            {/* Tombol CTA */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button
                asChild
                className="h-11 bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 font-bold rounded-full px-6 transition-all shadow-lg shadow-emerald-500/20"
              >
                <a href="#projects" className="inline-flex items-center gap-2">
                  <span>{ctaPrimary}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-800 rounded-full px-6"
              >
                <a href="#contact">
                  <span>{ctaSecondary}</span>
                </a>
              </Button>
            </div>
          </div>

          {/* KOLOM KANAN: Foto Profil & Kartu Fokus (Ditumpuk Vertikal) */}
          <div className="flex flex-col items-center justify-center gap-8 order-1 lg:order-2">

            {/* 1. Foto Profil */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full p-1.5 bg-white dark:bg-slate-950 ring-1 ring-slate-200 dark:ring-slate-800 shadow-2xl overflow-hidden">
                <img
                  src="/images/profile-photo.jpeg"
                  alt={profileData.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* 2. Kartu Focus (Posisi di bawah foto agar rapi) */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-sky-500/10 to-transparent blur-2xl" />
              <Card className="relative border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl">
                <CardContent className="p-5 space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1.5">
                        {language === "en" ? "CURRENT FOCUS" : "FOKUS SAAT INI"}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        Cohort Front End & Backend with AI
                      </p>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                        Asah led by Dicoding
                      </p>
                    </div>
                    <Badge className="shrink-0 bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30 text-[10px] px-2 py-1 rounded-full">
                      {language === "en" ? "Learning" : "Sedang belajar"}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-3 space-y-2">
                      <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                        <Code2 className="h-4 w-4 text-emerald-500" />
                        <span className="font-semibold text-xs">Front-End</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {profileData.skills.frontend.slice(0, 3).map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-white border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 text-[10px] font-medium px-1.5 py-0.5"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-3 space-y-2">
                      <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                        <Cpu className="h-4 w-4 text-emerald-500" />
                        <span className="font-semibold text-xs">Back-End</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {profileData.skills.backend.slice(0, 3).map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-white border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 text-[10px] font-medium px-1.5 py-0.5"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="space-y-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {language === "en" ? "How I Can Help" : "Layanan Saya"}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
              {language === "en"
                ? "Building clean, functional, and user-friendly web solutions."
                : "Membangun solusi web yang bersih, fungsional, dan mudah digunakan."}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const title = getLocalizedText(service.title, language);
              const desc = getLocalizedText(service.description, language);
              const Icon =
                service.icon === "Code2"
                  ? Code2
                  : service.icon === "Cpu"
                    ? Cpu
                    : Code2;

              return (
                <Card
                  key={service.id}
                  className="group relative border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-emerald-500/30 dark:hover:border-emerald-500/30"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;