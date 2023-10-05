import localFont from "@next/font/local";

export const formula = localFont({
  src: [
    {
      path: "../public/fonts/formula/FormulaCondensed-Bold.otf",
      weight: "700",
    },
    {
        path: "../public/fonts/formula/FormulaCondensed-Light.otf",
        weight: "400",
      },
  ],
  variable: "--formula",
  display:'swap'
});


export const neue = localFont({
  src: [
    {
      path: "../public/fonts/neue/Fontspring-DEMO-neueradial-a-regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/neue/Fontspring-DEMO-neueradial-a-medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/neue/Fontspring-DEMO-neueradial-a-book.otf",
      weight: "600",
    },
  
  ],
  variable: "--neue",
  display:'swap'
});