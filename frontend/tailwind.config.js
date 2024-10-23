/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of your template files
  content: [
    "./index.html", // Path to your main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to all JS/TS files in the src directory
  ],
  theme: {
    extend: {
      // Extend the default theme here if needed
    },
  },
  plugins: [
    // Add any plugins you want to use here
  ],
};
