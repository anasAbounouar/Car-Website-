import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.css";
import "./scss/all.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./scss/framework.css";
import "normalize.css";
const app = createApp(App);
app.mixin({
  created() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      // More AOS options...
    });
  },
});
app.use(router);
app.use(store);
app.mount("#app");
