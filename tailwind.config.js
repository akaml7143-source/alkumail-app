module.exports = {
  content: ['./assets/www/index.html'],
  theme: { extend: {
    fontFamily: { cairo: ['Arial', 'sans-serif'], amiri: ['serif'], kufi: ['Arial', 'sans-serif'] },
    boxShadow: {
      'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.4)',
      'gold-inner': 'inset 0 0 15px rgba(212, 175, 55, 0.3)'
    }
  } },
  plugins: []
};
