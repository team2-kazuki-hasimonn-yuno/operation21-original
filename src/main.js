// eslint-disable-next-line prettier/prettier
import { createApp } from "vue"
// eslint-disable-next-line prettier/prettier
import App from "./App.vue"
// eslint-disable-next-line prettier/prettier
import router from "./router"
// eslint-disable-next-line prettier/prettier
import "./firebase.js"

// eslint-disable-next-line prettier/prettier
createApp(App).use(router).mount("#app")
