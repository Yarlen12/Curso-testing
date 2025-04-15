import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    //test es La config de vitest
    environment: "happy-dom",
  },
});
