import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import store from "./store";
import i18n from "./locales/i18n";
// Add Element-plus
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";




/* import bootstrap@5.2.3  */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



/* import the fontawesome core */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faChair } from '@fortawesome/free-solid-svg-icons'
import { faHotel } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faPlaneDeparture)
library.add(faPlaneArrival)
library.add(faChevronDown)
library.add(faChevronUp)
library.add(faLeftLong)
library.add(faCartFlatbedSuitcase)
library.add(faChair)
library.add(faHotel)

/* add font awesome icon component */

// for translate pages
let lang = localStorage.getItem("lang");
document.documentElement.lang = lang;
/** End Notification */


// End FireBase Init

//
const optionsProgress = {
  color: "#bffaf3",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "left",
  inverse: false,
};

// For Maps

createApp(App)
  .use(store)
  .use(i18n)
  .use(VueProgressBar, optionsProgress)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)

  .mount("#app");

  const app = createApp(App)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

