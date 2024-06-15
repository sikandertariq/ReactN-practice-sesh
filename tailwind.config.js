module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./screens/*.{js,jsx,ts,tsx}", // Include screens folder
    "./components/*.{js,jsx,ts,tsx}", // Include components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
