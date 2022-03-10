import './assets/css/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FontAwesomeIcon from "./utils/fontawesome-icons";

createApp(App)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
