import localFont from "next/font/local";

export const pilowlava = localFont({
  src: [
    {
      path: "../../public/fonts/pilowlava/Pilowlava-Regular.otf",
      style: "normal",
    },
  ],
  variable: "--font-pilowlava",
  display: "swap",
});
