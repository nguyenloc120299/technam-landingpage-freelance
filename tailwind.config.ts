import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius:{
      "8":"8px"
    },
    colors: {
      "color/1": "#0040FC",
      "color/2": "#6B6A75",
      "0A0A0A":"#0A0A0A"
    },
    screens: {
      t: "768px",
      l: "1080px",
      d: "1280px",
    },
    fontWeight: {
      "400": "400",
      "500": "500",
      "600": "600",
      "700": "700",
      "800": "800",
      "900": "900",
    },
    fontFamily: {
      lato: ["var(--font-lato)"],
    },
    lineHeight: {
      "leading/1": "28.8px",
      "17": "17px",
      "21": "21px",
      "24": "24px",
      "40": "40px",
      "54": "54px",
    },
    boxShadow: {
      "custom-1": "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
    },
    extend: {
      boxShadow: {
        "custom-main-1":
          "0px 14px 28px 0px rgba(0, 0, 0, 0.25), 0px 10px 10px 0px rgba(0, 0, 0, 0.10)",
        "custom-main-2": "0px 0px 30px 0px #ddd",
      },
      backgroundColor: {
        transparent: "transparent",
      },
      backgroundImage: {
        "main-header":"linear-gradient(180deg, rgba(0, 51, 131, 0.50) 0%, rgba(2, 101, 255, 0.12) 97.5%)",
        "custom-main-1":
          "linear-gradient(105deg, #0265FF 7.67%, #02E1FF 67.51%, #013D99 96.98%, #013D99 96.98%)",
        "custom-main-2": "linear-gradient(90deg, #1998FF 0%, #36F 100%)",
        "custom-main-3":
          "linear-gradient(105deg, #0265FF 48.05%, #013D99 99.78%, #013D99 99.78%)",
          "custom-main-4":"linear-gradient(179deg, #0265FF 0.69%, #0863F1 57.43%, #065EE7 134.89%), linear-gradient(180deg, #4B0DCF 0%, #D648B8 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
