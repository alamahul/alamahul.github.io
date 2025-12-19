import React from "react";
import { Menu, X, Globe2, SunMedium, MoonStar, MonitorSmartphone, ArrowUp } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { profileData } from "../../mock/profileData";
import { Button } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const navItems = [
  { to: "#home", key: "home" },
  { to: "#about", key: "about" },
  { to: "#projects", key: "projects" },
  { to: "#contact", key: "contact" },
];

const navLabels = {
  home: { id: "Beranda", en: "Home" },
  about: { id: "Tentang", en: "About" },
  projects: { id: "Proyek", en: "Projects" },
  contact: { id: "Kontak", en: "Contact" },
};

const sectionTitles = {
  home: "Alamahul Bayan - Portfolio",
  about: "About | Alamahul Bayan",
  projects: "Projects | Alamahul Bayan",
  contact: "Contact | Alamahul Bayan",
};

function MainLayout({ children }) {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  const bgClass =
    "min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col transition-colors duration-300";
  const headerClass =
    "sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300";
  const footerClass =
    "border-t border-slate-200/60 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-950/95 transition-colors duration-300";

  // State
  const [activeSection, setActiveSection] = React.useState("home");
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  // SOLUSI FLICKERING: Gunakan useRef untuk melacak apakah user sedang mengklik menu
  const isManualScroll = React.useRef(false);

  // Fungsi khusus saat menu diklik
  const handleNavClick = (key) => {
    // 1. Kunci listener scroll
    isManualScroll.current = true;

    // 2. Set aktif section langsung (agar UI instan berubah)
    setActiveSection(key);
    setOpen(false); // Tutup mobile menu jika terbuka

    // 3. Buka kunci setelah animasi scroll selesai (kira-kira 1 detik)
    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  // Efek untuk mengubah Judul Tab Browser
  React.useEffect(() => {
    document.title = sectionTitles[activeSection] || "Alamahul Bayan";
  }, [activeSection]);

  // Efek untuk Scroll Spy & Back to Top
  React.useEffect(() => {
    const handleScroll = () => {
      // Selalu update tombol Back to Top
      setShowScrollTop(window.scrollY > 400);

      // JIKA SEDANG MANUAL SCROLL (KLIK MENU), JANGAN JALANKAN LOGIKA DI BAWAH INI
      if (isManualScroll.current) return;

      const sections = ["home", "about", "projects", "contact"];
      // Offset ditambah sedikit agar deteksi lebih akurat saat user scroll manual
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={bgClass}>
      <header className={headerClass}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-500 text-sm font-bold">
              AB
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-slate-50">
                {profileData.name}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:block font-medium">
                Web Developer & AI Enthusiast
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const label = navLabels[item.key][language] || navLabels[item.key].id;
              const isActive = activeSection === item.key;

              return (
                <a
                  key={item.key}
                  href={item.to}
                  // GUNAKAN HANDLER BARU DISINI
                  onClick={() => handleNavClick(item.key)}
                  className={`transition-colors relative py-1 ${isActive
                      ? "text-emerald-600 dark:text-emerald-400 font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-emerald-600"
                    }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <Globe2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <ToggleGroup
                type="single"
                value={language}
                onValueChange={(val) => val && setLanguage(val)}
                className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full p-0.5"
              >
                <ToggleGroupItem
                  value="id"
                  className="data-[state=on]:bg-white dark:data-[state=on]:bg-slate-800 data-[state=on]:text-emerald-600 dark:data-[state=on]:text-emerald-400 data-[state=on]:shadow-sm h-6 px-2.5 text-[10px] rounded-full transition-all"
                >
                  ID
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="en"
                  className="data-[state=on]:bg-white dark:data-[state=on]:bg-slate-800 data-[state=on]:text-emerald-600 dark:data-[state=on]:text-emerald-400 data-[state=on]:shadow-sm h-6 px-2.5 text-[10px] rounded-full transition-all"
                >
                  EN
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Theme Toggle */}
            <div className="hidden sm:flex items-center gap-1 text-xs">
              <ToggleGroup
                type="single"
                value={theme}
                onValueChange={(val) => val && setTheme(val)}
                className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full p-0.5"
              >
                <ToggleGroupItem
                  value="system"
                  className="data-[state=on]:bg-white dark:data-[state=on]:bg-slate-800 data-[state=on]:shadow-sm h-6 px-2 rounded-full"
                >
                  <MonitorSmartphone className="h-3 w-3" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="light"
                  className="data-[state=on]:bg-white dark:data-[state=on]:bg-slate-800 data-[state=on]:shadow-sm h-6 px-2 rounded-full text-amber-500"
                >
                  <SunMedium className="h-3 w-3" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="dark"
                  className="data-[state=on]:bg-white dark:data-[state=on]:bg-slate-800 data-[state=on]:shadow-sm h-6 px-2 rounded-full text-indigo-400"
                >
                  <MoonStar className="h-3 w-3" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 font-bold text-xs px-4 py-2 rounded-full"
            >
              <a href="/cv-alamahul-bayan.pdf" download>
                {language === "en" ? "Download CV" : "Unduh CV"}
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex md:hidden items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle navigation</span>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl">
            <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4">
              <nav className="flex flex-col gap-1 text-sm font-medium">
                {navItems.map((item) => {
                  const label = navLabels[item.key][language] || navLabels[item.key].id;
                  const isActive = activeSection === item.key;
                  return (
                    <a
                      key={item.key}
                      href={item.to}
                      // GUNAKAN HANDLER BARU DISINI JUGA
                      onClick={() => handleNavClick(item.key)}
                      className={`px-4 py-3 rounded-xl transition-colors ${isActive
                          ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-bold"
                          : "hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-emerald-600"
                        }`}
                    >
                      {label}
                    </a>
                  );
                })}
              </nav>

              <div className="border-t border-slate-100 dark:border-slate-900 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ToggleGroup
                    type="single"
                    value={language}
                    onValueChange={(val) => val && setLanguage(val)}
                    className="bg-slate-100 dark:bg-slate-900 rounded-lg p-1"
                  >
                    <ToggleGroupItem value="id" className="data-[state=on]:bg-white dark:data-[state=on]:bg-slate-800 h-7 px-3 text-xs rounded-md shadow-sm">ID</ToggleGroupItem>
                    <ToggleGroupItem value="en" className="data-[state=on]:bg-white dark:data-[state=on]:bg-slate-800 h-7 px-3 text-xs rounded-md shadow-sm">EN</ToggleGroupItem>
                  </ToggleGroup>

                  <ToggleGroup
                    type="single"
                    value={theme}
                    onValueChange={(val) => val && setTheme(val)}
                    className="bg-slate-100 dark:bg-slate-900 rounded-lg p-1"
                  >
                    <ToggleGroupItem value="light" className="data-[state=on]:bg-white dark:data-[state=on]:bg-slate-800 h-7 px-3 rounded-md shadow-sm"><SunMedium className="h-3.5 w-3.5" /></ToggleGroupItem>
                    <ToggleGroupItem value="dark" className="data-[state=on]:bg-white dark:data-[state=on]:bg-slate-800 h-7 px-3 rounded-md shadow-sm"><MoonStar className="h-3.5 w-3.5" /></ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <Button
                  asChild
                  size="sm"
                  className="bg-emerald-500 text-white hover:bg-emerald-600 font-bold text-xs px-4 py-2 rounded-full"
                >
                  <a href="/cv-alamahul-bayan.pdf" download>
                    CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-20">
          {children}
        </div>
      </main>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300 dark:bg-emerald-500 dark:text-slate-900"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <footer className={footerClass}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>
              © {new Date().getFullYear()} {profileData.name}.
            </span>
            <span className="hidden sm:inline">Built with passion & code.</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/alamahul"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;