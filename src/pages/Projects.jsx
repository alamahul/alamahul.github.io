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
    <div className="space-y-8">
      <section className="space-y-3">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
            {language === "en" ? "Projects" : "Proyek"}
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            {language === "en"
              ? "Selected projects that reflect how I build"
              : "Beberapa proyek yang mencerminkan cara saya membangun"}
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl">
            {language === "en"
              ? "From full-stack e-commerce platforms to school registration systems and public service tools, I enjoy turning real needs into working web applications."
              : "Dari platform e-commerce full-stack hingga sistem pendaftaran sekolah dan alat layanan publik, saya senang mengubah kebutuhan nyata menjadi aplikasi web yang bekerja."}
          </p>
        </div>

        <Tabs
          value={filter}
          onValueChange={setFilter}
          className="w-full mt-2"
        >
          <TabsList className="bg-slate-900/70 border border-slate-800">
            <TabsTrigger value="all" className="text-xs">
              {language === "en" ? "All" : "Semua"}
            </TabsTrigger>
            <TabsTrigger value="web-apps" className="text-xs">
              {language === "en" ? "Web apps" : "Aplikasi web"}
            </TabsTrigger>
            <TabsTrigger value="learning" className="text-xs">
              {language === "en" ? "Learning projects" : "Proyek belajar"}
            </TabsTrigger>
          </TabsList>
          <TabsContent value={filter} className="mt-4">
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition-colors flex flex-col h-full"
                >
                  <CardContent className="p-5 space-y-3 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-slate-50">
                          {getLocalizedText(project.title, language)}
                        </p>
                        {project.organization && (
                          <p className="text-xs text-slate-400">
                            {project.organization}
                          </p>
                        )}
                      </div>
                      <Badge className="bg-emerald-500/15 border-emerald-400/40 text-emerald-200 text-[11px] px-2 py-0.5">
                        {language === "en" ? "Project" : "Proyek"}
                      </Badge>
                    </div>

                    {project.period && (
                      <p className="text-xs text-slate-400">
                        {getLocalizedText(project.period, language)}
                      </p>
                    )}

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {getLocalizedText(project.summary, language)}
                    </p>

                    <ul className="mt-1 space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                      {project.features[language === "en" ? "en" : "id"].map(
                        (feature, idx) => (
                          <li key={idx}>{feature}</li>
                        )
                      )}
                    </ul>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-slate-700 bg-slate-900/80 text-[11px] font-normal px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                      <div className="inline-flex items-center gap-1">
                        <Layers3 className="h-3.5 w-3.5 text-emerald-300" />
                        <span>
                          {language === "en"
                            ? `${project.skills.length} focused skills`
                            : `${project.skills.length} keahlian terpakai`}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-2 py-0.5 text-[11px] text-slate-200 hover:border-emerald-400 hover:text-emerald-200 transition-colors"
                        onClick={() => {
                          const message =
                            language === "en"
                              ? "This is a portfolio preview. Live link or GitHub can be added later."
                              : "Ini masih tampilan portfolio. Link live atau GitHub bisa ditambahkan nanti.";
                          alert(message);
                        }}
                      >
                        <span>
                          {language === "en" ? "Details" : "Detail"}
                        </span>
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
            {language === "en" ? "Licenses & Certifications" : "Lisensi & Sertifikasi"}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {profileData.certifications.map((cert) => (
            <Card
              key={cert.id}
              className="border-slate-800 bg-slate-900/60"
            >
              <CardContent className="p-4 space-y-2 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-slate-50 text-sm">
                      {cert.title}
                    </p>
                    <p className="text-slate-400">{cert.issuer}</p>
                  </div>
                  <Badge className="bg-slate-900 border-slate-700 text-[11px] text-slate-300 px-2 py-0.5">
                    {language === "en" ? "Certificate" : "Sertifikat"}
                  </Badge>
                </div>
                <p className="text-slate-400">{cert.date}</p>
                {cert.credentialId && (
                  <p className="text-slate-500">
                    ID: <span className="font-mono">{cert.credentialId}</span>
                  </p>
                )}
                {cert.description && (
                  <p className="text-slate-300 leading-relaxed">
                    {getLocalizedText(cert.description, language)}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-slate-700 bg-slate-900/80 text-[11px] font-normal px-2 py-0.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                {cert.associatedProjectId && (
                  <p className="mt-2 text-[11px] text-emerald-300">
                    {language === "en"
                      ? "Includes project: Sharing Story App (PWA web app for online stories)."
                      : "Mencakup proyek: Sharing Story App (WebApp PWA untuk berbagi cerita online)."}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
