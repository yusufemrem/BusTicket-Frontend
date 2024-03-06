import Vue from "vue";
import Home from "./Components/Home/HomePage.vue";
import Voyage from "./Components/Voyages/Voyage.vue";
import TicketDetail from "./Components/Ticket/TicketDetail.vue";
import Register from "./Components/Register/Register.vue";
import Login from "./Components/Login/Login.vue";
import TicketStatus from "./Components/Admin/TicketStatus.vue";
import AddVoyage from "./Components/Admin/AddVoyage.vue";
import ExcelReport from "./Components/Admin/ExcelReport.vue";
import Message from "./Components/Message/Message.vue";
import CompanyChart from "./Components/Admin/CompanyChart.vue";
import Statistics from "./Components/Admin/Statistics.vue";
import Discount from "./Components/Admin/Discount.vue";
import Payment from "./Components/Payment/Payment.vue";
import MessageBox from "./Components/Admin/MessageBox.vue";
import LoginUser from "./Components/Login/LoginUser.vue";
import MediatrTicket from "./Components/CQRSTicket/MediatrTicket.vue";
import PastTravels from "./Components/Ticket/PastTravels.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/src/Components/Home/HomePage.vue",
    component: Home,
    name: "anaSayfa",
  },
  {
    path: "/src/Components/Voyages/Voyage.vue",
    component: Voyage,
    name: "seferler",
  },
  {
    path: "/src/Components/Ticket/TicketDetail.vue",
    component: TicketDetail,
    name: "detaybilet",
  },

  {
    path: "/src/Components/Register/Register.vue",
    component: Register,
    name: "kayitol",
  },
  {
    path: "/src/Components/Login/Login.vue",
    component: Login,
    name: "girisyap",
  },
  {
    path: "/src/Components/Admin/TicketStatus.vue",
    component: TicketStatus,
    name: "biletdurumu",
  },
  {
    path: "/src/Components/Admin/AddVoyage.vue",
    component: AddVoyage,
    name: "seferolustur",
  },
  {
    path: "/src/Components/Admin/ExcelReport.vue",
    component: ExcelReport,
    name: "excelrapor",
  },
  {
    path: "/src/Components/Message/Message.vue",
    component: Message,
    name: "mesajgonder",
  },
  {
    path: "/src/Components/Admin/CompanyChart.vue",
    component: CompanyChart,
    name: "grafikfirma",
  },
  {
    path: "/src/Components/Admin/Statistics.vue",
    component: Statistics,
    name: "istatistikler",
  },
  {
    path: "/src/Components/Admin/Discount.vue",
    component: Discount,
    name: "indirimkupon",
  },
  {
    path: "/src/Components/Payment/Payment.vue",
    component: Payment,
    name: "odemebilgi",
  },
  {
    path: "/src/Components/Admin/MessageBox.vue",
    component: MessageBox,
    name: "mesajkutusu",
    beforeEnter: (to, from, next) => {
      // Örnek bir kontrol yapısı
      const isAuthenticated = localStorage.getItem("token");
      if (!isAuthenticated) {
        // Eğer token yoksa, giriş sayfasına yönlendir
        localStorage.removeItem("token");
        next("/src/Components/Login/Login.vue");

        alert("Giriş Yapmadan Bu Sayfaya Erişim Sağlayamazsınız");
      } else {
        // Token varsa, mesaj kutusu sayfasına devam et

        next();
      }
    },
  },
  {
    path: "/",
    component: LoginUser,
    name: "kullanicigirisi",
  },
  {
    path: "/src/Components/CQRSTicket/MediatrTicket.vue",
    component: MediatrTicket,
    name: "ticketcqrs",
  },
  {
    path: "/src/Components/Ticket/PastTravels.vue",
    component: PastTravels,
    name: "gecmissefer",
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    // Kullanıcı giriş yapmadıysa ve erişim yetkisi gerekiyorsa, giriş sayfasına yönlendir
    next("/login");
  } else {
    // Eğer token varsa veya erişim yetkisi gerekmeyen bir sayfaya gidiliyorsa devam et
    next();
  }
});
