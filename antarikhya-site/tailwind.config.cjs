module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial"],
        display: ["Orbitron", "Inter", "system-ui"]
      },
      colors: {
        space: {
          black: "#000000",
          white: "#ffffff",
          ink: "#0b0b0b",
          muted: "#6b7280"
        }
      }
    },
  },
  plugins: [],
}
