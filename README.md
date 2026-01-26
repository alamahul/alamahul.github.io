# Professional Web Developer Portfolio Alamahul Bayan

![Project Banner](assets\screenshoots\screenshoot-hero-desktop.png)

A modern, high-performance portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. This project showcases a clean, responsive design with advanced features like dark mode, multi-language support (Bahasa Indonesia & English), and a fully functional contact form integrated with **EmailJS**.

## 🚀 Key Features

*   **🎨 Modern & Responsive Design**: built with Tailwind CSS, ensuring a seamless experience across all devices (Mobile, Tablet, Desktop).
*   **🌙 Dark / Light Mode**: Toggable theme with persisted preferences.
*   **🌐 Multi-Language Support**: Complete internationalization (i18n) support for Bahasa Indonesia (ID) and English (EN).
*   **⚡ High Performance**: Powered by Vite for lightning-fast HMR and build performance.
*   **📧 Functional Contact Form**: Integrated with **EmailJS** for real-time email delivery directly from the frontend.
*   **🔔 Interactive Feedback**: Custom alerts using **SweetAlert2** for better user experience.
*   **✨ Smooth Animations**: Polished UI interactions using CSS transitions and Lucide React icons.

## 🛠️ Tech Stack

*   **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Email Service**: [EmailJS](https://www.emailjs.com/)
*   **Alerts**: [SweetAlert2](https://sweetalert2.github.io/)

## 📂 Project Structure

```bash
portofolio-v3/
├── src/
│   ├── components/       # Reusable UI components (Hero, About, Projects, Contact, etc.)
│   ├── constants.tsx     # Static data (Content texts, translations, project data)
│   ├── types.ts          # TypeScript interfaces
│   ├── App.tsx           # Main application entry
│   └── main.tsx          # DOM renderer
├── public/               # Static assets
└── ...
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

*   **Node.js** (v18 or higher recommended)
*   **npm** or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio-web.git
    cd portfolio-web
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your EmailJS configuration:
    ```env
    
    VITE_GEMINI_API_KEY=GEMINI_API_KEY
    VITE_MODEL=MODEL_NAME
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key

    ```
    > **Note:** You can get these keys by registering at [EmailJS](https://www.emailjs.com/).

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) to view it in the browser.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the build locally:

```bash
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/alamahul">Alamahul Bayan</a>
</p>
