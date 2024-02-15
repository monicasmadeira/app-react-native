/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "Inter_400Regular",
        subtitle: "Inter_500Medium",
        heading: "Inter_600SemiBold",
        bold: "Inter_700Bold",
      }    },
  },
  plugins: [],
}

