/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './styles/**/*.{html,js}'
    // The source of your files, e.g. "./src/**/*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-1': "url('../styles/images/PhotoBanner1.jpg')",
        'main-2': "url('../styles/images/PhotoBanner2.jpg')",
        'main-3': "url('../styles/images/PhotoBanner3.jpg')",
        'main-4': "url('../styles/images/PhotoBanner4.jpg')",
        'main-5': "url('../styles/images/PhotoBanner5.jpg')",
      },
    },
  },
  plugins: [],
}