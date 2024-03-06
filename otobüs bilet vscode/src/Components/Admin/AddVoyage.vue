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

              <li class="active">
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
              <li>
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
                    @click="logout"
                    href="javascript:;"
                    data-toggle="modal"
                    data-target="#confirmModal"
                    ><i class="fa fa-sign-out"></i>Çıkış Yap a a
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
          <!--/.navbar-collapse -->

          <div class="templatemo-content-wrapper">
            <div class="templatemo-content">
              <div class="row">
                <div class="col-md-12">
                  <div
                    v-for="voyage in Voyage"
                    :key="voyage.voyageID"
                    class="table-responsive"
                  >
                    <table
                      class="table table-striped table-hover table-bordered"
                    >
                      <tr>
                        <th>Sefer ID</th>
                        <th>Başlangıç Noktası</th>
                        <th>Bitiş Noktası</th>
                        <th>Başlangıç Tarihi</th>
                        <th>Bitiş Tarihi</th>
                        <th>Koltuk Kapasitesi</th>
                        <th>Bilet Ücreti</th>
                        <th>Firma</th>
                        <th>Seferi Sil</th>
                      </tr>
                      <tr>
                        <td>{{ voyage.voyageID }}</td>
                        <td>{{ voyage.startingPlace }}</td>
                        <td>{{ voyage.destination }}</td>
                        <td>{{ voyage.startingDate | formatVoyageDate }}</td>
                        <td>{{ voyage.destinationDate | formatVoyageDate }}</td>
                        <td>{{ voyage.seatCapacity }}</td>
                        <td>{{ voyage.ticketPrice }}</td>
                        <td>{{ getCompany(voyage.companyID) }}</td>
                        <td>
                          <button
                            @click="deleteVoyage(voyage.voyageID)"
                            type="submit"
                            class="btn-danger btn btn-default"
                          >
                            Sil
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <button
                @click="createdVoyageForm"
                type="submit"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Yeni Sefer Oluştur
              </button>
              <div v-if="CreatedVoyageForm" class="template-page-wrapper">
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
                          placeholder="Başlangıç Noktası"
                          v-model="AddVoyage.startingPlace"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label for="username" class="col-sm-2 control-label"
                        >Bitiş Noktası</label
                      >
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          id="username"
                          placeholder="Bitiş Noktası"
                          type="text"
                          v-model="AddVoyage.destination"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label for="username" class="col-sm-2 control-label"
                        >Başlangıç Tarihi</label
                      >
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          id="username"
                          placeholder="yyyy/mm/dd hh:mm"
                          type="datetime-local"
                          name="yyyy/mm/dd"
                          v-model="AddVoyage.startingDate"
                          value="2024-01-17T00:00"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label for="username" class="col-sm-2 control-label"
                        >Bitiş Tarihi</label
                      >
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          id="username"
                          placeholder="yyyy/mm/dd hh:mm"
                          type="datetime-local"
                          name="yyyy/mm/dd"
                          v-model="AddVoyage.destinationDate"
                          value="2024-01-17T00:00"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label for="username" class="col-sm-2 control-label"
                        >Firma Adı</label
                      >
                      <div class="col-sm-10">
                        <select
                          id="citySelectStarting"
                          class="form-control"
                          v-model="AddVoyage.companyID"
                        >
                          <option
                            v-for="company in Company"
                            :value="company.companyID"
                          >
                            {{ getCompany(company.companyID) }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label for="username" class="col-sm-2 control-label"
                        >Koltuk Kapasitesi</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="Koltuk Kapasitesi"
                          v-model="AddVoyage.seatCapacity"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label for="username" class="col-sm-2 control-label"
                        >Bilet Ücreti</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="Bilet Ücreti"
                          v-model="AddVoyage.ticketPrice"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-md-12">
                      <div class="col-sm-offset-2 col-sm-10">
                        <button
                          @click="saveVoyage"
                          type="submit"
                          class="btn btn-default"
                        >
                          Sefer Oluştur
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
      Voyage: [],
      CreatedVoyageForm: false,
      AddVoyage: {
        startingPlace: null,
        destination: null,
        startingDate: null,
        destinationDate: null,
        companyID: null,
        seatCapacity: null,
        ticketPrice: null,
        appUserID: null,
      },
      Company: [],
      username: [],
    };
  },

  created() {
    this.checkTokenAndFetchUserVoyage();
    this.allVoyage();
    this.allCompany();

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
          this.Voyage.appUserID = this.username.nameIdentifier;

          //   this.fetchUserBlogs(); // Kullanıcıya ait blogları filtrele
        })
        .catch((error) => {
          console.error("Token doğrulama hatası:", error);
          //  localStorage.removeItem("token");
          // this.$router.push({ name: "Login" });
        });
    }
  },
  methods: {
    checkTokenAndFetchUserVoyage() {
      console.log("çalıştı");
      const token = localStorage.getItem("token");
      console.log("Token kontrol ediliyor...");
      if (token) {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        // Axios isteği .then() ve .catch() blokları arasında yapılmalıdır.
        axios
          .get("https://localhost:44336/api/Auth/GetCompanyVoyage", config)
          .then((response) => {
            // Kullanıcının biletlerini al
            console.log("Kullanıcının biletleri:", response.data);
            this.Voyage = response.data;
          })
          .catch((error) => {
            // Hata durumunda işlemler
            console.error("Token doğrulama hatası:", error);
            localStorage.removeItem("token");
            this.$router.push({ name: "Login" });
          });
      }
    },
    logout() {
      // LocalStorage'dan token'ı sil
      localStorage.removeItem("token");

      // Kullanıcıyı giriş sayfasına yönlendir
      this.$router.push("/src/Components/Login/LoginUser.vue");
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
    createdVoyageForm() {
      this.CreatedVoyageForm = !this.CreatedVoyageForm;
    },

    saveVoyage() {
      this.AddVoyage.appUserID = this.username.nameIdentifier;
      this.$store.dispatch("saveVoyage", this.AddVoyage);
      this.$router.push("/src/Components/Admin/TicketStatus.vue");
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
    getCompany(companyID) {
      const company = this.Company.find((c) => c.companyID === companyID);
      return company ? `${company.companyName}` : "";
    },
    deleteVoyage(id) {
      this.$http
        .delete("https://localhost:44336/api/Voyage/DeleteVoyage/" + id)
        .then(() => {
          this.Voyage = this.Voyage.filter((v) => v.voyageID !== id);
        })
        .catch((error) => {
          console.error("Error deleting :", error);
        });
    },
  },

  filters: {
    formatVoyageDate(value) {
      if (typeof value === "string") {
        value = value.replace("T", " ");
        return new Date(value).toLocaleString("tr-TR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        });
      }
      return value;
    },
  },
};
</script>
