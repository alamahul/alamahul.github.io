import React from "react";
import { profileData, getLocalizedText } from "../mock/profileData";
import { useLanguage } from "../context/LanguageContext";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

function About() {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-20 scroll-mt-16 animate-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            {language === "en" ? "ABOUT ME" : "TENTANG SAYA"}
          </p>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
                {language === "en"
                  ? "Faith-driven web developer in progress"
                  : "Web developer yang tumbuh dengan nilai dan integritas"}
              </h2>
              <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {getLocalizedText(profileData.about, language)
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
              </div>
            </div>

            {/* Tech Stack Card */}
            <Card className="border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
              <CardContent className="p-6 space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                    {language === "en" ? "Core Technologies" : "Teknologi Utama"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.primary.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/15 dark:border-emerald-500/30 dark:text-emerald-300 px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-2">
                      Front-end
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {profileData.skills.frontend.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-white border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-2">
                      Back-end
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {profileData.skills.backend.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-white border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 font-normal">
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

        {/* Experience & Education Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                {language === "en" ? "Experience" : "Pengalaman"}
              </h3>
            </div>
            <div className="space-y-4">
              {profileData.experiences.map((exp) => (
                <Card key={exp.id} className="border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40 hover:border-emerald-500/30 transition-colors">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="text-base font-bold text-slate-900 dark:text-slate-50">{getLocalizedText(exp.role, language)}</p>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-500">{getLocalizedText(exp.period, language)}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {getLocalizedText(exp.summary, language)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                {language === "en" ? "Education" : "Pendidikan"}
              </h3>
            </div>
            <div className="space-y-4">
              {profileData.education.map((edu) => (
                <Card key={edu.id} className="border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40 hover:border-emerald-500/30 transition-colors">
                  <CardContent className="p-5 space-y-3">
                    <div>
                      <p className="text-base font-bold text-slate-900 dark:text-slate-50">{getLocalizedText(edu.degree, language)}</p>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{edu.institution}</p>
                      <p className="text-xs text-slate-500 mt-1">{getLocalizedText(edu.period, language)}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {getLocalizedText(edu.description, language)}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {edu.focusSkills.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400 text-[10px]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;