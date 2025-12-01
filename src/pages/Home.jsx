import React from "react";
import { Link } from "react-router-dom";
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
    <div className="space-y-12">
      {/* Hero */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            <Sparkles className="h-3.5 w-3.5" />
            <span>
              {language === "en"
                ? "Informatics Engineering student who loves building meaningful web apps"
                : "Mahasiswa Teknik Informatika yang senang membangun aplikasi web yang bermakna"}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
              {profileData.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-emerald-300">
              {heroTitle}
            </p>
            <p className="max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
              {heroSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="bg-emerald-400 text-slate-950 hover:bg-emerald-300 font-semibold rounded-full px-5"
            >
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm">
                <span>{ctaPrimary}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-slate-700 bg-slate-900/60 text-slate-100 hover:bg-slate-800 rounded-full px-4"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm">
                <span>{ctaSecondary}</span>
              </Link>
            </Button>

            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              {profileData.skills.primary.slice(0, 3).map((skill) => (
                <span key={skill} className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-500/15 via-sky-500/5 to-transparent blur-3xl" />
          <Card className="relative border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-xl">
            <CardContent className="p-5 sm:p-6 space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {language === "en" ? "Current focus" : "Fokus saat ini"}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    Cohort Front End & Backend with AI
                  </p>
                  <p className="text-xs text-slate-400">Asah led by Dicoding</p>
                </div>
                <Badge className="bg-emerald-500/15 text-emerald-300 border-emerald-400/40 text-[11px] px-2 py-1 rounded-full">
                  {language === "en" ? "Learning" : "Sedang belajar"}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 space-y-2">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Code2 className="h-4 w-4 text-emerald-300" />
                    <span className="font-medium text-[13px]">
                      Front-End Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {profileData.skills.frontend.slice(0, 4).map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-slate-700 bg-slate-900/60 text-[11px] font-normal px-2 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 space-y-2">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Cpu className="h-4 w-4 text-emerald-300" />
                    <span className="font-medium text-[13px]">Back-End & AI</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {profileData.skills.backend.slice(0, 3).map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-slate-700 bg-slate-900/60 text-[11px] font-normal px-2 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div>
                  <p className="font-medium text-slate-200">
                    {language === "en" ? "Values in code" : "Nilai dalam setiap kode"}
                  </p>
                  <p>
                    {language === "en"
                      ? "Discipline, simplicity, and sincerity guided by faith."
                      : "Disiplin, kesederhanaan, dan ketulusan yang dijaga oleh iman."}
                  </p>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    Based in
                  </span>
                  <span className="text-xs text-slate-200">
                    {profileData.location}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
              {language === "en" ? "What I can help you with" : "Layanan yang saya tawarkan"}
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-xl">
              {language === "en"
                ? "I focus on building web experiences that are clean, reliable, and aligned with real needs."
                : "Saya fokus membangun pengalaman web yang rapi, dapat diandalkan, dan benar-benar menjawab kebutuhan."}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => {
            const title = getLocalizedText(service.title, language);
            const desc = getLocalizedText(service.description, language);

            const Icon = service.icon === "Code2" ? Code2 : service.icon === "Cpu" ? Cpu : Code2;

            return (
              <Card
                key={service.id}
                className="border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition-colors group h-full"
              >
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="rounded-xl bg-emerald-500/10 border border-emerald-400/30 p-2 text-emerald-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <Badge className="bg-slate-900 border-slate-700 text-[11px] text-slate-300 px-2 py-0.5">
                      {language === "en" ? "Service" : "Layanan"}
                    </Badge>
                  </div>
                  <h3 className="font-medium text-sm text-slate-50">{title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Preview section */}
      <section className="border border-slate-800 rounded-3xl bg-slate-900/60 px-4 py-4 sm:px-6 sm:py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
            {language === "en" ? "Next" : "Selanjutnya"}
          </p>
          <p className="text-sm font-medium text-slate-50">
            {language === "en"
              ? "See the projects I've built with MERN, PHP, and modern web stacks."
              : "Lihat proyek yang sudah saya bangun dengan MERN, PHP, dan stack web modern."}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex -space-x-2">
            {profileData.projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-emerald-500/40 to-sky-500/30"
              />
            ))}
          </div>
          <Button
            asChild
            variant="outline"
            className="border-emerald-400/50 text-emerald-200 hover:bg-emerald-500/10 rounded-full px-4 text-xs"
          >
            <Link to="/projects" className="inline-flex items-center gap-1.5">
              <span>{ctaPrimary}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
