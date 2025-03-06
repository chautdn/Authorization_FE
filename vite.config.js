import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
require("dotenv").config();

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allows external access (needed for Render)
    // eslint-disable-next-line no-undef
    port: process.env.PORT || 3000, // Uses Render's assigned port
  },
});
