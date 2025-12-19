import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
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
