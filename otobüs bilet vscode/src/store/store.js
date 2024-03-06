import Vue from "vue";
import Vuex from "vuex";
import ticket from "./modules/ticket";
import register from "./modules/register";
import voyage from "./modules/voyage";
import message from "./modules/message";
import discount from "./modules/discount";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: {
    ticket,
    register,
    voyage,
    message,
    discount,
  },
});
