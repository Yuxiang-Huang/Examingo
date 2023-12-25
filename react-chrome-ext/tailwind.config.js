/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#FF001F",
        "primary-purple": "#DB00FF",
        "background-purple": "#290E2B",
        "correct-green": "#42FF00",
        "incorrect-red": "#FF001F",
        "secondary-red": "#450000",
        "secondary-purple": "#4C0059",
        "primary-purple-50": "rgba(219,0,255,0.5)",
        "primary-red-50": "rgba(255,0,31,0.5)",
        "primary-purple-75": "rgba(219,0,255,0.75)",
        "primary-red-75": "rgba(255,0,31,0.75)",
        "text-color": "white",
      },
      skew: {
        "-24": "-24deg",
      },
      boxShadow: {
        main: "inset 0px 0px 15px 2px rgba(0,0,0,0.5)",
        'inner-white': "inset 0px 0px 15px 2px rgba(255,255,255,0.25)",
        'glow-red': "inset 0px 0px 15px 2px rgba(255,0,0,0.25)",
      },
      flexBasis: {
        "1/10":"10%",
      },
    },
  },
  variants: {
    fontSize: ({ after }) => after(['em']),
  },
  plugins: [
    require('tailwindcss/plugin')(function({ addVariant }) {
      addVariant('em', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.em\\:${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.value = decl.value.replace('rem', 'em');
          });
        })
      })
    }),
  ],
};
