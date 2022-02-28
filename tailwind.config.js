module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1495px",
        "3xl": "1181px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        sidebar: "url('/sidebar-image.jpg')",
        flare: "url(/flare.jpg)",
        party: "url('/bg-party.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
