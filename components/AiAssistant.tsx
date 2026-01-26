import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Sparkles, Loader2, Bot, ChevronDown } from 'lucide-react';
import { PROJECTS, SKILLS, EXPERIENCE_DATA, SERVICES, UI_TEXT } from '../constants';
import { Language } from '../types';

interface AiAssistantProps {
  language: Language;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: language === 'id'
        ? 'Halo! Saya asisten pintar Alamahul. Tanyakan apa saja tentang portfolio, skill, atau pengalaman saya!'
        : 'Hello! I am Alamahul\'s smart assistant. Ask me anything about the portfolio, skills, or experience!'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Reset/Update welcome message when language changes if it's the only message
  useEffect(() => {
    if (messages.length === 1) {
      setMessages([
        {
          role: 'model',
          text: language === 'id'
            ? 'Halo! Saya asisten pintar Alamahul. Tanyakan apa saja tentang portfolio, skill, atau pengalaman saya!'
            : 'Hello! I am Alamahul\'s smart assistant. Ask me anything about the portfolio, skills, or experience!'
        }
      ]);
    }
  }, [language]);

  const generateContext = () => {
    const t = UI_TEXT[language];
    const skills = SKILLS[language].map(s => `${s.name} (${s.category}, ${s.level}%)`).join(', ');
    const projects = PROJECTS[language].map(p => `- Project: ${p.title}\n  Description: ${p.description}\n  Tech Stack: ${p.tags.join(', ')}`).join('\n');
    const exp = EXPERIENCE_DATA[language].map(e => `- Role: ${e.role} at ${e.company} (${e.period})\n  Description: ${e.description}`).join('\n');

    return `
      You are a friendly and professional AI assistant for the portfolio website of Alamahul Bayan.
      Your goal is to answer visitor questions based ONLY on the provided context below.
      
      CONTEXT DATA (${language === 'id' ? 'Indonesian' : 'English'}):
      
      [Profile]
      Name: Alamahul Bayan
      Role: ${t.hero.role}
      Description: ${t.hero.desc}
      Bio: ${t.about.profileDesc1} Alamahul Bayan, ${t.about.profileDesc2}
      
      [Skills]
      ${skills}
      
      [Projects]
      ${projects}
      
      [Experience]
      ${exp}
      
      [Services]
      ${SERVICES[language].map(s => `${s.title}: ${s.description}`).join('\n')}
      
      [Contact]
      Email: bayanalamahul3@gmail.com
      Location: Garut, Jawa Barat, Indonesia
      
      INSTRUCTIONS:
      1. Answer in the same language as the user (currently ${language === 'id' ? 'Indonesian' : 'English'}).
      2. Keep answers concise, helpful, and professional.
      3. If asked about technologies used in applications, reference the [Projects] and [Skills] sections explicitly.
      4. If the answer is not in the context, politely say you don't have that information.
    `;
  };

  const handleSend = async (textOverride?: string) => {
    const userText = textOverride || input;
    if (!userText.trim()) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      // Initialize Gemini Client
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
      const context = generateContext();

      const chatBotModel = import.meta.env.VITE_MODEL;
      const response = await ai.models.generateContent({
        model: chatBotModel,
        contents: [
          { role: 'user', parts: [{ text: context + "\n\nUser Question: " + userText }] }
        ]
      });

      const text = response.text || (language === 'id' ? 'Maaf, saya tidak mengerti.' : 'Sorry, I did not understand that.');

      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: language === 'id'
          ? 'Maaf, terjadi kesalahan pada koneksi AI. Pastikan API KEY sudah terpasang.'
          : 'Sorry, there was an AI connection error. Please ensure the API KEY is configured.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestions = language === 'id'
    ? ["Teknologi apa yang Alam gunakan?", "Apa pengalaman kerjanya?", "Ceritakan tentang proyeknya"]
    : ["What technology does Alam use?", "What is his work experience?", "Tell me about his projects"];

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col animate-fade-in-up origin-bottom-right overflow-hidden max-h-[500px]">

          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">AI Assistant</h3>
                <div className="flex items-center gap-1.5 opacity-80">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-medium">Online (Gemini)</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronDown size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50 min-h-[300px]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                    ? 'bg-primary text-white rounded-tr-none'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-none'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-primary" />
                  <span className="text-xs text-slate-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions (Only if few messages) */}
          {messages.length < 3 && !isLoading && (
            <div className="px-4 pb-2 bg-slate-50 dark:bg-slate-900/50 flex gap-2 overflow-x-auto no-scrollbar">
              {suggestions.map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(sug)}
                  className="whitespace-nowrap px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors"
                >
                  {sug}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 rounded-full px-4 py-2 border border-transparent focus-within:border-primary/50 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={language === 'id' ? "Ketik pesan..." : "Type a message..."}
                disabled={isLoading}
                className="flex-1 bg-transparent outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="p-1.5 bg-primary text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-110"
        >
          <Sparkles size={24} className="animate-pulse" />
          <span className="absolute right-0 top-0 flex h-3 w-3 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400 border-2 border-white"></span>
          </span>

          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {language === 'id' ? 'Tanya AI' : 'Ask AI'}
          </span>
        </button>
      )}
    </div>
  );
};

export default AiAssistant;