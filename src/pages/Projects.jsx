import React from "react";
import { profileData, getLocalizedText } from "../mock/profileData";
import { useLanguage } from "../context/LanguageContext";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Layers3, ExternalLink } from "lucide-react";

function Projects() {
  const { language } = useLanguage();
  const [filter, setFilter] = React.useState("all");

  const projects = React.useMemo(() => {
    if (filter === "web-apps") {
      return profileData.projects.filter((p) =>
        p.techStack.some((t) =>
          ["React", "Laravel", "Express.js", "Node.js"].some((key) => t.includes(key))
        )
      );
    }
    if (filter === "learning") {
      return profileData.projects.filter((p) => p.id === "project-sharing-story");
    }
    return profileData.projects;
  }, [filter]);

  return (
    <section id="projects" className="py-20 scroll-mt-16 animate-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            {language === "en" ? "PROJECTS" : "PROYEK"}
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
              {language === "en" ? "Selected Works" : "Karya Pilihan"}
            </h2>
            <Tabs value={filter} onValueChange={setFilter} className="w-full md:w-auto">
              {/* Tab Styling Adaptif */}
              <TabsList className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1">
                <TabsTrigger value="all" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm text-xs sm:text-sm">
                  {language === "en" ? "All" : "Semua"}
                </TabsTrigger>
                <TabsTrigger value="web-apps" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm text-xs sm:text-sm">
                  {language === "en" ? "Web apps" : "Aplikasi Web"}
                </TabsTrigger>
                <TabsTrigger value="learning" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm text-xs sm:text-sm">
                  {language === "en" ? "Learning" : "Belajar"}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {language === "en"
              ? "From full-stack e-commerce platforms to public service tools, converting real needs into working applications."
              : "Dari platform e-commerce full-stack hingga alat layanan publik, mengubah kebutuhan nyata menjadi aplikasi yang bekerja."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all flex flex-col h-full hover:shadow-lg"
            >
              {/* AREA GAMBAR */}
              <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
                {/* Overlay saat hover (Opsional - biar ada interaksi) */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 z-10 transition-colors duration-300" />

                {/* Gambar */}
                <img
                  src={project.image || "https://placehold.co/180x180/4f46e5/ffffff?text=Gambar+Proyek"} // Fallback image jika belum ada
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <CardContent className="p-6 space-y-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {getLocalizedText(project.title, language)}
                    </h3>
                    {project.organization && (
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        {project.organization}
                      </p>
                    )}
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20 px-2.5 py-1">
                    {language === "en" ? "Project" : "Proyek"}
                  </Badge>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {getLocalizedText(project.summary, language)}
                </p>

                <div className="mt-auto pt-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Layers3 className="h-3.5 w-3.5" />
                      <span>{project.skills.length} {language === "en" ? "technologies" : "teknologi"}</span>
                    </div>
                    <button
                      onClick={() => alert(language === "en" ? "Coming soon!" : "Segera hadir!")}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                    >
                      {language === "en" ? "View Details" : "Lihat Detail"}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;