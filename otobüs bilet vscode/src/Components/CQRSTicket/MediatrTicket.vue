<template>
  <div>
    <head>
      <link rel="stylesheet" href="/htmladmin/css/templatemo_main.css" />
    </head>
    <body>
      <div id="main-wrapper">
        <div class="navbar navbar-inverse" role="navigation">
          <div class="navbar-header">
            <div class="logo">
              <h1>{{ username.email }}</h1>
            </div>
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
        </div>
        <div class="template-page-wrapper">
          <div class="navbar-collapse collapse templatemo-sidebar">
            <ul class="templatemo-sidebar-menu">
              <li>
                <router-link to="/src/Components/Admin/Statistics.vue">
                  <a href="#"><i class="fa fa-home"></i>İstatistik</a>
                </router-link>
              </li>

              <li>
                <router-link to="/src/Components/Admin/AddVoyage.vue">
                  <a href="#"><i class="fa fa-cubes"></i>Sefer Ekle</a>
                </router-link>
              </li>

              <li>
                <router-link to="/src/Components/Admin/TicketStatus.vue">
                  <a href="#"><i class="fa fa-cubes"></i>Biletler Durum</a>
                </router-link>
              </li>
              <li>
                <router-link to="/src/Components/Admin/MessageBox.vue">
                  <a href="#"><i class="fa fa-cubes"></i>Mesaj Kutusu</a>
                </router-link>
              </li>
              <li>
                <router-link to="/src/Components/Admin/Discount.vue">
                  <a href="#"><i class="fa fa-cubes"></i>İndirim Kuponu Üret</a>
                </router-link>
              </li>
              <li class="active">
                <router-link to="/src/Components/CQRSTicket/MediatrTicket.vue">
                  <a href="#"><i class="fa fa-cubes"></i>CQRS Bilet</a>
                </router-link>
              </li>
              <li>
                <router-link to="/src/Components/Admin/ExcelReport.vue">
                  <a href="#"><i class="fa fa-cubes"></i>Excel Tablo İndir</a>
                </router-link>
              </li>

              <li>
                <router-link to="/">
                  <a
                    href="javascript:;"
                    data-toggle="modal"
                    data-target="#confirmModal"
                    ><i class="fa fa-sign-out"></i>Çıkış Yap</a
                  >
                </router-link>
              </li>
            </ul>
          </div>
          <!--/.navbar-collapse -->

          <div class="templatemo-content-wrapper">
            <div class="templatemo-content">
              <ol class="breadcrumb">
                <li><a href="index.html">Admin Panel</a></li>
                <li>
                  <a href="#">Bilet Durum a b {{ username.nameIdentifier }}</a>
                </li>
                <li class="active">Tables</li>
              </ol>
              <h1>Manage Users</h1>
              <p>Here goes tables and users.</p>

              <div class="row margin-bottom-30">
                <div class="col-md-12">
                  <ul class="nav nav-pills">
                    <li class="active">
                      <a href="#">New Users <span class="badge">42</span></a>
                    </li>
                    <li>
                      <a href="#"
                        >Active Users <span class="badge">107</span></a
                      >
                    </li>
                    <li>
                      <a href="#">Expired Users <span class="badge">3</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="btn-group pull-right" id="templatemo_sort_btn">
                    <!-- <button type="button" class="btn btn-default">
                        Sort by
                      </button>
                      <button
                        type="button"
                        class="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span class="caret"></span>
                        <span class="sr-only">Toggle Dropdown</span>
                      </button> -->
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">First Name</a></li>
                      <li><a href="#">Last Name</a></li>
                      <li><a href="#">Username</a></li>
                    </ul>
                  </div>
                  <div v-for="ticket in tickets" class="table-responsive">
                    <table
                      class="table table-striped table-hover table-bordered"
                    >
                      <tr>
                        <th>Bilet ID</th>
                        <th>Bilet Fiyatı</th>
                        <th>Koltuk Numarası</th>
                        <th>Bilet Durumu</th>
                        <th>Sefer ID</th>
                        <th>Güzergah</th>
                      </tr>
                      <tr>
                        <td>{{ ticket.ticketID }}</td>
                        <td>{{ ticket.ticketPrice }}</td>
                        <td>{{ ticket.seatNumber }}</td>
                        <td>{{ ticket.ticketStatus }}</td>
                        <td>
                          {{ ticket.voyageID }}
                        </td>
                        <td>{{ getGuzergah(ticket.voyageID) }}</td>
                      </tr>
                    </table>
                  </div>
                  <div class="table-responsive">
                    <h4 class="margin-bottom-15">
                      Another Table of Existing Users
                    </h4>
                  </div>
                  <div class="col-md-12">
                    <button @click="showTicketForm" class="send_btn">
                      Bilet Al
                    </button>
                  </div>
                  <div v-if="showBuyForm" class="template-page-wrapper">
                    <form
                      class="form-horizontal templatemo-signin-form"
                      role="form"
                      action="index.html"
                      method="get"
                    >
                      <div class="form-group">
                        <div class="col-md-12">
                          <label for="username" class="col-sm-2 control-label"
                            >Başlangıç Noktası</label
                          >
                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="username"
                              v-model="BuyTicket.seatNumber"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="col-md-12">
                          <div class="col-sm-offset-2 col-sm-10">
                            <button
                              @click="buyTicket"
                              type="submit"
                              class="btn btn-default"
                            >
                              Bilet Al
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
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
      BuyTicket: {
        ticketPrice: 1,
        userID: 1,
        seatNumber: null,
        ticketStatus: "Aktif",
        voyageID: 1010,
        appUserID: null,
      },
      showBuyForm: false,
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
          this.BuyTicket.appUserID = this.username.nameIdentifier;
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

    AllTicket() {
      this.$http
        .get("https://localhost:44336/api/TicketMediatR/GetAllTicket")
        .then((response) => {
          this.tickets = response.data;
          console.log("çalışttt34", this.Tickets);
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
    showTicketForm() {
      this.showBuyForm = !this.showBuyForm;
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
    buyTicket() {
      this.$http
        .post("https://localhost:44336/api/Auth/BuyTicket", this.BuyTicket)
        .then((response) => {
          this.BuyTicket = response.data;
          this.$router.push("/src/Components/Admin/TicketStatus.vue");
        })
        .catch((error) => {
          console.error("Error buying ticket:", error);
        });
    },

    getGuzergah(voyageID) {
      const voyage = this.Voyage.find((v) => v.voyageID === voyageID);
      return voyage ? `${voyage.startingPlace} - ${voyage.destination}` : "";
    },
  },
};
</script>
