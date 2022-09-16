/// <reference types="vite/client" />
import { plugin, defaultConfig } from "@formkit/vue";
const app = createApp(App);
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");