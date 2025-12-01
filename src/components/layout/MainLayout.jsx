import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Globe2, SunMedium, MoonStar, MonitorSmartphone } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { profileData } from "../../mock/profileData";
import { Button } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const navItems = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/projects", key: "projects" },
  { to: "/contact", key: "contact" },
];

const navLabels = {
  home: { id: "Beranda", en: "Home" },
  about: { id: "Tentang", en: "About" },
  projects: { id: "Proyek", en: "Projects" },
  contact: { id: "Kontak", en: "Contact" },
};

function MainLayout() {
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  const isHome = pathname === "/";

  const bgClass = "min-h-screen bg-background text-foreground flex flex-col";
  const headerClass =
    "sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800 bg-background/90 backdrop-blur-md";
  const footerClass =
    "border-t border-slate-200/60 dark:border-slate-800 bg-background/95";

  return (
    <div className={bgClass}>
      <header className={headerClass}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-emerald-400/10 border border-emerald-400/40 flex items-center justify-center text-emerald-500 text-sm font-semibold">
              AB
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
                {profileData.name}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Web Developer & AI Enthusiast
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const label = navLabels[item.key][language] || navLabels[item.key].id;
              return (
                <NavLink
                  key={item.key}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative font-medium transition-colors hover:text-emerald-500 ${
                      isActive
                        ? "text-emerald-600 dark:text-emerald-300"
                        : "text-slate-600 dark:text-slate-300"
                    }`
                  }
                >
                  {label}
                </NavLink>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <Globe2 className="h-4 w-4 text-emerald-500 dark:text-emerald-300" />
              <ToggleGroup
                type="single"
                value={language}
                onValueChange={(val) => val && setLanguage(val)}
                className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-full px-1"
              >
                <ToggleGroupItem
                  value="id"
                  className="data-[state=on]:bg-emerald-500 data-[state=on]:text-white h-6 px-2 text-[11px]"
                >
                  ID
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="en"
                  className="data-[state=on]:bg-emerald-500 data-[state=on]:text-white h-6 px-2 text-[11px]"
                >
                  EN
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="hidden sm:flex items-center gap-1 text-xs">
              <ToggleGroup
                type="single"
                value={theme}
                onValueChange={(val) => val && setTheme(val)}
                className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-full px-1"
              >
                <ToggleGroupItem
                  value="system"
                  className="data-[state=on]:bg-slate-900 data-[state=on]:text-slate-50 h-6 px-2 text-[11px] inline-flex items-center gap-1"
                >
                  <MonitorSmartphone className="h-3 w-3" />
                  Sys
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="light"
                  className="data-[state=on]:bg-amber-400 data-[state=on]:text-slate-900 h-6 px-2 text-[11px] inline-flex items-center gap-1"
                >
                  <SunMedium className="h-3 w-3" />
                  LT
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="dark"
                  className="data-[state=on]:bg-slate-900 data-[state=on]:text-slate-50 h-6 px-2 text-[11px] inline-flex items-center gap-1"
                >
                  <MoonStar className="h-3 w-3" />
                  DK
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex bg-emerald-500 text-white hover:bg-emerald-400 font-semibold text-xs px-3 py-1.5 rounded-full"
            >
              <a href="/cv-Alamahul-Bayan.pdf" download>
                {language === "en" ? "Download CV" : "Unduh CV"}
              </a>
            </Button>

            <button
              type="button"
              className="inline-flex md:hidden items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle navigation</span>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-background/95">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
              <nav className="flex flex-col gap-2 text-sm">
                {navItems.map((item) => {
                  const label = navLabels[item.key][language] || navLabels[item.key].id;
                  return (
                    <NavLink
                      key={item.key}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `px-2 py-1.5 rounded-md transition-colors ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
                            : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  );
                })}
              </nav>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <Globe2 className="h-4 w-4 text-emerald-500 dark:text-emerald-300" />
                  <ToggleGroup
                    type="single"
                    value={language}
                    onValueChange={(val) => val && setLanguage(val)}
                    className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-full px-1"
                  >
                    <ToggleGroupItem
                      value="id"
                      className="data-[state=on]:bg-emerald-500 data-[state=on]:text-white h-6 px-2 text-[11px]"
                    >
                      ID
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="en"
                      className="data-[state=on]:bg-emerald-500 data-[state=on]:text-white h-6 px-2 text-[11px]"
                    >
                      EN
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <div className="flex items-center gap-2">
                  <ToggleGroup
                    type="single"
                    value={theme}
                    onValueChange={(val) => val && setTheme(val)}
                    className="bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-full px-1 text-xs"
                  >
                    <ToggleGroupItem value="system" className="data-[state=on]:bg-slate-900 data-[state=on]:text-slate-50 h-6 px-2">
                      <MonitorSmartphone className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="light" className="data-[state=on]:bg-amber-400 data-[state=on]:text-slate-900 h-6 px-2">
                      <SunMedium className="h-3 w-3" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="dark" className="data-[state=on]:bg-slate-900 data-[state=on]:text-slate-50 h-6 px-2">
                      <MoonStar className="h-3 w-3" />
                    </ToggleGroupItem>
                  </ToggleGroup>

                  <Button
                    asChild
                    size="sm"
                    className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold text-xs px-3 py-1.5 rounded-full"
                  >
                    <a href="/cv-alamahul-bayan.pdf" download>
                      {language === "en" ? "Download CV" : "Unduh CV"}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <div
          className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${
            isHome ? "pt-12 pb-16" : "pt-10 pb-16"
          }`}
        >
          <Outlet />
        </div>
      </main>

      <footer className={footerClass}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>
              © {new Date().getFullYear()} {profileData.name}.
            </span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
            >
              {profileData.contact.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
