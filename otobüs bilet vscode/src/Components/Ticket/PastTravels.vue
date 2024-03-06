<template>
  <div>
    <html lang="en">
      <!-- basic -->

      <!-- bootstrap css -->
      <link rel="stylesheet" href="/html1/css/bootstrap.min.css" />
      <!-- style css -->
      <link rel="stylesheet" href="/html1/css/style.css" />
      <!-- Responsive-->
      <link rel="stylesheet" href="/html1/css/responsive.css" />
      <!-- fevicon -->
      <link rel="icon" href="/html1/images/fevicon.png" type="image/gif" />
      <!-- Scrollbar Custom CSS -->
      <link
        rel="stylesheet"
        href="/html1/css/jquery.mCustomScrollbar.min.css"
      />
      <!-- Tweaks for older IEs-->
      <link
        rel="stylesheet"
        href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
        media="screen"
      />
      <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script
      ><![endif]-->

      <!-- body -->

      <!-- loader  -->

      <div class="our_room">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Seferlerim</h2>
              </div>
            </div>
          </div>
          <div v-for="ticket in tickets">
            <div class="col-md-4 col-sm-6">
              <div id="serv_hover" class="room">
                <div class="room_img"></div>
                <div class="bed_room">
                  <h3>
                    {{ ticket.userStartingPlace }} -
                    {{ ticket.userDestination }}
                  </h3>
                  <p>Fiyat : {{ ticket.ticketPrice }}</p>
                  <p>Koltuk Numarası : {{ ticket.seatNumber }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <router-link to="/src/Components/Home/HomePage.vue">
        <button type="submit" class="book_btn">
          Anasayfa
        </button>
      </router-link>
      <!-- end our_room -->
      <!-- gallery -->

      <!-- end footer -->
      <!-- Javascript files-->
    </html>
  </div>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";
import axios from "axios";
import router from "../../router";
Vue.use(VueResource);
export default {
  data() {
    return {
      tickets: [],
      Voyage: [],
      username: [],
      Company: [],
    };
  },

  created() {
    this.checkTokenAndFetchUserTicket();
    this.allVoyage();
    // this.buyTicket();

    const token = localStorage.getItem("token");
    console.log("created çalıştı");
    if (token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .get("https://localhost:44336/api/Auth/ValidateToken", config)
        .then((response) => {
          this.username = response.data;
          //    this.BuyTicket.appUserID = this.username.nameIdentifier;
          //   this.fetchUserBlogs(); // Kullanıcıya ait blogları filtrele
        })
        .catch((error) => {
          console.error("Token doğrulama hatası:", error);
          //  localStorage.removeItem("token");
          // this.$router.push({ name: "Login" });
        });
    }
    this.AllTicket();
  },
  methods: {
    checkTokenAndFetchUserTicket() {
      console.log("çalıştı");
      const token = localStorage.getItem("token");
      console.log("Token kontrol ediliyor...");
      if (token) {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        // Axios isteği .then() ve .catch() blokları arasında yapılmalıdır.
        axios
          .get("https://localhost:44336/api/Auth/GetUserTicket", config)
          .then((response) => {
            // Kullanıcının biletlerini al
            console.log("Kullanıcının biletleri:", response.data);
            this.tickets = response.data;
          })
          .catch((error) => {
            // Hata durumunda işlemler
            console.error("Token doğrulama hatası:", error);
            localStorage.removeItem("token");
            this.$router.push({ name: "Login" });
          });
      }
    },
    getCompany(companyID) {
      const company = this.Company.find((c) => c.companyID === companyID);
      return company ? `${company.companyName}` : "";
    },
    AllTicket() {
      this.$http
        .get("https://localhost:44336/api/Ticket/TicketDetail")
        .then((response) => {
          this.tickets = response.data;
          console.log("çalışttt34", this.Tickets);
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },

    allVoyage() {
      this.$http
        .get("https://localhost:44336/api/Voyage/AllVoyage")
        .then((response) => {
          this.Voyage = response.data;
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
    allCompany() {
      this.$http
        .get("https://localhost:44336/api/Company/AllCompany")
        .then((response) => {
          this.Company = response.data;
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
  },
};
</script>
