import { fileURLToPath, URL } from "node:url";

import { getHttpsServerOptions } from "office-addin-dev-certs";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "node:path";

async function getHttpsOptions() {
  const httpsOptions = await getHttpsServerOptions();
  return { ca: httpsOptions.ca, key: httpsOptions.key, cert: httpsOptions.cert };
}

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "devextreme/ui": "devextreme/esm/ui",
      },
    },
    build: {
      rollupOptions: {
        plugins: [
          {
            name: "no-treeshake",
            transform(_, id) {
              if (id.includes("ui/data_grid")) {
                return { moduleSideEffects: "no-treeshake" };
              }
              // if (id.includes("ui/editor")) {
              //   return { moduleSideEffects: "no-treeshake" };
              // }
            },
          },
        ],
        input: {
          main: resolve(__dirname, "index.html"),
          taskpane: resolve(__dirname, "taskpane/index.html"),
          commands: resolve(__dirname, "commands/index.html"),
        },
      },
    },
    server: {
      https: await getHttpsOptions(),
    },
  };
});
