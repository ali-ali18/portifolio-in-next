import localFont from "next/font/local";

export const pilowlava = localFont({
  src: [
    {
      path: "../../public/fonts/pilowlava/Pilowlava-Regular.woff2",
      style: "normal",
    },
  ],
  variable: "--font-pilowlava",
  display: "optional",
  preload: false,
});
