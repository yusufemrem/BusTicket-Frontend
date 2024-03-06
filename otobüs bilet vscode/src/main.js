import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import { router } from "./router";
import { store } from "./store/store";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

// export const eventBus = new Vue({
//   methods: {
//     changeAge(age) {
//       this.$emit("ageWasEdited", age);
//     },
//   },
// });

Vue.use(VueResource);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
