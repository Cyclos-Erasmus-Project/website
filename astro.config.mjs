import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://cyclos-project.eu",
  integrations: [tailwind()],
  trailingSlash: "always",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "ro", "de", "el"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
