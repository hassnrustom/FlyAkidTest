import { createI18n } from "vue-i18n";
import en from "./en.json";
import fr from "./fr.json";
import ar from "./ar.json";
import ckb from "./ckb.json"
const i18n = createI18n({
  locale: localStorage.getItem("lang"),
  messages: {
    en,
    fr,
    ar,
    ckb
  },
});
export default i18n;