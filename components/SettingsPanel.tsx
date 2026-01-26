import React, { useState } from 'react';
import { Settings, X, Moon, Sun, Globe } from 'lucide-react';
import { Language } from '../types';

interface SettingsPanelProps {
  intensity: number;
  setIntensity: (value: number) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ 
  intensity, 
  setIntensity, 
  isDarkMode, 
  setIsDarkMode,
  language,
  setLanguage
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 p-5 rounded-xl shadow-2xl mb-4 w-72 animate-fade-in-up origin-bottom-right">
          <div className="flex justify-between items-center mb-4 border-b border-slate-200 dark:border-slate-700/50 pb-3">
            <h3 className="text-slate-900 dark:text-white font-semibold text-sm flex items-center gap-2">
              <Settings size={16} className="text-primary" />
              {language === 'id' ? 'Tampilan' : 'Settings'}
            </h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="space-y-6">
            {/* Language Switch */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-medium">
                <Globe size={16} />
                <span>{language === 'id' ? 'Bahasa' : 'Language'}</span>
              </div>
              <div className="flex bg-slate-200 dark:bg-slate-700 rounded-lg p-1 gap-1">
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    language === 'id' 
                      ? 'bg-white dark:bg-slate-600 text-primary shadow-sm' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    language === 'en' 
                      ? 'bg-white dark:bg-slate-600 text-primary shadow-sm' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-medium">
                {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                <span>{language === 'id' ? (isDarkMode ? 'Mode Gelap' : 'Mode Terang') : (isDarkMode ? 'Dark Mode' : 'Light Mode')}</span>
              </div>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                  isDarkMode ? 'bg-primary' : 'bg-slate-300'
                }`}
              >
                <span 
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Intensity Slider */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-300 mb-2">
                <span>{language === 'id' ? 'Intensitas Background' : 'Background Intensity'}</span>
                <span className="text-primary">{Math.round(intensity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={intensity}
                onChange={(e) => setIntensity(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-secondary transition-all"
              />
              <p className="text-[10px] text-slate-500 mt-2">
                {language === 'id' ? 'Geser untuk mengatur visibilitas animasi blobs di latar belakang.' : 'Slide to adjust the visibility of background blobs.'}
              </p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3.5 rounded-full border shadow-lg transition-all duration-300 group ${
          isOpen 
            ? 'bg-primary border-primary text-white rotate-90' 
            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700'
        }`}
        title={language === 'id' ? "Pengaturan Tampilan" : "Display Settings"}
        aria-label="Settings"
      >
        <Settings size={24} className="group-hover:rotate-45 transition-transform duration-500" />
      </button>
    </div>
  );
};

export default SettingsPanel;