/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#5C31C1",
        websitesection: "#EDEAFF",
      },
    },
  },
  plugins: [],
};
