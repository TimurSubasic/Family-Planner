/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "p-3",
    "rounded-r-full",
    "bg-white",
    "text-xl",
    "font-semibold",
    "w-[35%]",
    "w-[65%]",
    "w-[55%]",
    "gap-2",
    "flex-1",
    "my-10",
    "mt-10",
    "p-5",
    "rounded-lg",
  ],
};
