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