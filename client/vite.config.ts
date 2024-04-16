import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://lionfish-app-ue4we.ondigitalocean.app/",
    },
  },
  plugins: [react()],
});
