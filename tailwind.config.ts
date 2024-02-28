import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customColor: '#FF0000',
        Button : '#f2f4cb',
        Button_text:'#8cada7',
        MajorBG:'#070F2B',
        SmallBG:'#9290C3',
        Ctext:'',
        SmallBG_text:'#070F2B',
        comps: '#' // Replace '#FF0000' with your hex color code
      },
    },
  },
  plugins: [],
};
export default config;
