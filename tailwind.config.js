// Rebuild styles.css after changing Tailwind classes in index.html:
//   npx tailwindcss@3.4.17 -o styles.css --minify
module.exports = {
  content: ['./index.html', './data.js'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif']
      }
    }
  }
};
