/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    "text-dark-bg", "bg-dark-bg", "border-dark-bg",
    "text-primary", "bg-primary", "border-primary",
    "text-primary-light", "bg-primary-light", 
    "text-primary-dark", "bg-primary-dark", "border-primary-dark",
    "text-white", "text-gray-300", "text-gray-400",
    "from-primary", "to-primary", "from-primary-dark", "to-primary-dark",
    "from-red-400", "to-red-600", "from-blue-400", "to-blue-600",
    "from-purple-400", "to-purple-600", "from-yellow-400", "to-yellow-600",
    "from-green-400", "to-green-600", "from-pink-400", "to-pink-600",
    "from-indigo-400", "to-indigo-600",
    "bg-gradient-to-r", "bg-opacity-20", "bg-clip-text",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FCB853",
        "primary-light": "#FDD89B",
        "primary-dark": "#F5A623",
        "dark-bg": "#1A1A1A",
        "light-text": "#333333",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in",
        slideUp: "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { transform: "translateY(30px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
      },
    },
  },
  plugins: [],
}
