import "virtual:uno.css";
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { setupDevExtreme } from "@/devextreme";

const app = createApp(App);

app.use(createPinia());
app.use(router);

setupDevExtreme();

app.mount("#app");
