import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { UI_TEXT } from '../constants';
import { Language } from '../types';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const t = UI_TEXT[language].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
      console.error('EmailJS credentials are not configured properly in .env.local');
      setTimeout(() => {
        setIsSubmitting(false);
        alert(language === 'id'
          ? 'EmailJS belum dikonfigurasi. Silakan isi API keys di file .env.local'
          : 'EmailJS is not configured. Please fill in the API keys in your .env.local file');
      }, 1000);
      return;
    }

    emailjs.send(
      serviceId,
      templateId,
      {
        name: formRef.current.user_name.value,
        email: formRef.current.user_email.value,
        subject: formRef.current.subject.value,
        message: formRef.current.message.value,
        reply_to: formRef.current.user_email.value,
      },
      publicKey
    )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setIsSubmitting(false);
        Swal.fire({
          title: language === 'id' ? 'Sukses' : 'Success',
          text: language === 'id'
            ? 'Pesan berhasil dikirim!'
            : 'Message successfully sent!',
          icon: 'success',
          confirmButtonColor: '#3b82f6', // primary color
          background: document.documentElement.classList.contains('dark') ? '#1e293b' : '#fff',
          color: document.documentElement.classList.contains('dark') ? '#fff' : '#1e293b',
        });
      }, (error) => {
        console.error('Failed to send email:', error.text);
        setIsSubmitting(false);
        Swal.fire({
          title: language === 'id' ? 'Gagal' : 'Failed',
          text: language === 'id'
            ? 'Gagal mengirim pesan. Silakan coba lagi.'
            : 'Failed to send message. Please try again.',
          icon: 'warning',
          confirmButtonColor: '#3b82f6', // primary color
          background: document.documentElement.classList.contains('dark') ? '#1e293b' : '#fff',
          color: document.documentElement.classList.contains('dark') ? '#fff' : '#1e293b',
        });
      });
  };

  return (
    <section id="contact" className="py-20 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Contact Info */}
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t.preTitle}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900 dark:text-white mb-6">{t.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-12">
              {t.desc}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold">{t.email}</h4>
                  <p className="text-slate-600 dark:text-slate-400">bayanalamahul3@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold">{t.phone}</h4>
                  <p className="text-slate-600 dark:text-slate-400">+62 812 8418 3061</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-blue-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold">{t.location}</h4>
                  <p className="text-slate-600 dark:text-slate-400">Garut, Jawa Barat, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-slate-800/30 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{t.formTitle}</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark/50 border border-slate-300 dark:border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                    placeholder={t.name}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark/50 border border-slate-300 dark:border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.subject}</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark/50 border border-slate-300 dark:border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-700 dark:text-neutral-300"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="IT Consultant">IT Consultant</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark/50 border border-slate-300 dark:border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white resize-none placeholder:text-slate-400"
                  placeholder="..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> {t.sending}
                  </>
                ) : (
                  <>
                    <Send size={20} /> {t.send}
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;