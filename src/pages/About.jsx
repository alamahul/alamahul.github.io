import React from "react";
import { profileData, getLocalizedText } from "../mock/profileData";
import { useLanguage } from "../context/LanguageContext";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

function About() {
  const { language } = useLanguage();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
            {language === "en" ? "About" : "Tentang"}
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            {language === "en"
              ? "Faith-driven web developer in progress"
              : "Web developer yang tumbuh dengan nilai dan integritas"}
          </h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-start">
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            {getLocalizedText(profileData.about, language)
              .split("\n\n")
              .map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
          </div>

          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="p-5 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  {language === "en" ? "Core skills" : "Keahlian utama"}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {profileData.skills.primary.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-emerald-500/15 border-emerald-400/40 text-emerald-200 text-[11px] px-2 py-0.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="font-medium text-slate-200 mb-1">
                    {language === "en" ? "Front-end" : "Front-end"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {profileData.skills.frontend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-slate-700 bg-slate-900/80 text-[11px] font-normal px-2 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium text-slate-200 mb-1">
                    {language === "en" ? "Back-end & database" : "Back-end & basis data"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {profileData.skills.backend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-slate-700 bg-slate-900/80 text-[11px] font-normal px-2 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="font-medium text-slate-200 mb-1 text-xs">
                  {language === "en" ? "Tools & others" : "Tools & lainnya"}
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {[...profileData.skills.tools, ...profileData.skills.other].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-slate-700 bg-slate-900/80 text-[11px] font-normal px-2 py-0.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-emerald-300" />
            <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
              {language === "en" ? "Experience" : "Pengalaman"}
            </h2>
          </div>
          <div className="space-y-4">
            {profileData.experiences.map((exp) => (
              <Card
                key={exp.id}
                className="border-slate-800 bg-slate-900/60 overflow-hidden"
              >
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-slate-50">
                        {getLocalizedText(exp.role, language)}
                      </p>
                      <p className="text-xs text-slate-400">{exp.company}</p>
                    </div>
                    <Badge className="bg-slate-900 border-slate-700 text-[11px] text-slate-300 px-2 py-0.5">
                      {exp.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-400">{getLocalizedText(exp.period, language)}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {getLocalizedText(exp.summary, language)}
                  </p>
                  <ul className="mt-1 space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                    {exp.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx}>{getLocalizedText(item, language)}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-emerald-300" />
            <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
              {language === "en" ? "Education" : "Pendidikan"}
            </h2>
          </div>
          <div className="space-y-4">
            {profileData.education.map((edu) => (
              <Card
                key={edu.id}
                className="border-slate-800 bg-slate-900/60 overflow-hidden"
              >
                <CardContent className="p-4 space-y-1.5">
                  <p className="text-sm font-medium text-slate-50">
                    {getLocalizedText(edu.degree, language)}
                  </p>
                  <p className="text-xs text-slate-400">{edu.institution}</p>
                  <p className="text-xs text-slate-400">
                    {getLocalizedText(edu.period, language)}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {getLocalizedText(edu.description, language)}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {edu.focusSkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-slate-700 bg-slate-900/80 text-[11px] font-normal px-2 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
