/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        segoe: ["Segoe UI"],
      },
      gridTemplateColumns: {
        section1: "minmax(0, 1920px)",
        section5: "minmax(0, 1680px)",
        section5Lg: "minmax(0, 834px)",
        section5Md: "minmax(0, 360px)",

        section3: "minmax(0, 240px) minmax(0, 1680px)",
        section3mediaXl: "minmax(0, 206px) minmax(0, 1234px)",
        section3mediaLg: "minmax(0, 834px)",
        section3mediaMd: "minmax(0, 360px)",
      },
      gridTemplateRows: {
        section2: "minmax(0, 56px) minmax(0, 904px)",
        section2mediaXl: "minmax(0, 48px) minmax(0, 792px)",
        section2mediaLg: "minmax(0, 48px) minmax(0, 1146px)",
        section2mediaMd: "minmax(0, 48px) minmax(0, 592px)",

        section4: "minmax(0, 818px) minmax(0, 86px)",
        section4mediaXl: "minmax(0, 710px) minmax(0, 82px)",
        section4mediaLg: "minmax(0, 1064px) minmax(0, 82px)",
        section4mediaMd: "minmax(0, 510px) minmax(0, 82px)",
      },

      container: {
        center: true,
        screens: {
          md: "360px",
          lg: "834px",
          xl: "1440px",
          "2xl": "1920px",
        },
      },
      screens: {
        md: "360px",
        lg: "834px",
        xl: "1440px",
        "2xl": "1920px",
      },

      transitionTimingFunction: {},
      backgroundImage: {},
      boxShadow: {
        borderSearch: "1px solid var(--grey-palette-grey-110, #8A8886)",
        sort: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
      },

      colors: {
        header: " #F2F2F2",
        todo: "var(--gray-7, #FCFCFC)",
        left: "var(--gray-4, #DDD)",
        right: "var(--secondary, #0D2960)",
        profile: "var(--s-2, #204383)",
        menuHover: "var(--gray-5, #EDEBE9)",
        mailColor: "var(--s-3, #7186B4)",
        textColor: "var(--black-2, #201F1E)",
        gray: "var(--gray-3, #A19F9D)",
        roundedColor: "var(--gray-2, #8A8886)",
        checkbox: "var(--grey-palette-grey-160, #323130)",
        date: "var(--gray-1, #605E5C)",
        footerLine: "#183977",
        footerMail: "var(--s-4, #C1CADF)",
        privacy: "var(--primary, #0078D4)",
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
