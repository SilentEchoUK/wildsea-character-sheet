import adapter from "@sveltejs/adapter-auto";
import path from "path";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $data: path.resolve("./src/data"),
          $types: path.resolve("./src/types"),
        },
      },
    },
  },
};

export default config;
