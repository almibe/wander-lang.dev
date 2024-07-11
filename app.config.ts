import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    server: {
        static: true,
        prerender: {
          routes: [], // array of routes
          crawlLinks: true, // automatic route detection based on urls
        }
    }
});
