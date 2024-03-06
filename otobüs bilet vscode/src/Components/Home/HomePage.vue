<template>
  <div>
    <html lang="en">
      <head>
        <!-- basic -->
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- mobile metas -->
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <!-- site metas -->
        <title>keto</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
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
      </head>
      <!-- body -->
      <body class="main-layout">
        <!-- loader  -->
        <!-- <div class="loader_bg">
          <div class="loader">
            <img src="/html1/images/loading.gif" alt="#" />
          </div>
        </div> -->
        <!-- end loader -->
        <!-- header -->

        <header>
          <!-- header inner -->
          <div class="header">
            <div class="container">
              <div class="row">
                <div
                  class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-arrow-down-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                </div>

                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav class="navigation navbar navbar-expand-md navbar-dark ">
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarsExample04"
                      aria-controls="navbarsExample04"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarsExample04">
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                          <a class="nav-link" href="index.html">Anasayfa</a>
                        </li>

                        <router-link to="/src/Components/Message/Message.vue">
                          <li class="nav-item">
                            <a class="nav-link" href="contact.html">İletişim</a>
                          </li>
                        </router-link>
                        <router-link
                          to="/src/Components/Ticket/PastTravels.vue"
                        >
                          <li class="nav-item">
                            <a class="nav-link" href="contact.html"
                              >Seferlerim</a
                            >
                          </li>
                        </router-link>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <!-- end header inner -->
        <!-- end header -->
        <!-- banner -->
        <section class="banner_main">
          <div
            id="myCarousel"
            class="carousel slide banner"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item">
                <img class="second-slide" src="" alt="Second slide" />
              </div>
              <div class="/html1/carousel-item">
                <img
                  class="third-slide"
                  src="/html1/images/112.jpg"
                  alt="Third slide"
                  width="100%"
                  height="105%"
                />
              </div>
            </div>
          </div>
          <div class="booking_ocline">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="book_room">
                    <h1></h1>
                    <form class="book_now">
                      <div class="row">
                        <div class="col-md-12">
                          <p>{{ username.email }}</p>
                          <span>Gidiş Tarihi</span>
                          <img class="date_cua" src="/html1/images/date.png" />
                          <input
                            class="online_book"
                            placeholder="yyyy/mm/dd hh:mm"
                            type="date"
                            name="yyyy/mm/dd"
                            v-model="Voyage.startingDate"
                          />
                        </div>

                        <!-- <div class="col-md-12">
                          <span>Dönüş Tarihi</span>
                          <img class="date_cua" src="/html1/images/date.png" />
                          <input
                            class="online_book"
                            placeholder="yyyy/mm/dd hh:mm"
                            type="date"
                            name="yyyy/mm/dd"
                            v-model="Voyage.destinationDate"
                          />
                        </div> -->
                        <span>Nereden</span>

                        <select
                          id="citySelectStarting"
                          class="form-control"
                          v-model="Voyage.startingPlace"
                        >
                          <option
                            v-for="voyage in Voyage"
                            :value="voyage.startingPlace"
                          >
                            {{ voyage.startingPlace }}
                          </option>
                        </select>
                        <span>Nereye</span>

                        <select
                          id="citySelectDestination"
                          class="form-control"
                          v-model="Voyage.destination"
                        >
                          <hr />

                          <option
                            v-for="voyage in Voyage"
                            :value="voyage.destination"
                          >
                            {{ voyage.destination }}
                          </option>
                        </select>

                        <div class="col-md-12">
                          <hr />
                          <router-link
                            :to="{
                              name: 'seferler',

                              query: {
                                startingPlace: Voyage.startingPlace,
                                destination: Voyage.destination,
                                startingDate: Voyage.startingDate,
                                destinationDate: Voyage.destinationDate,
                                companyID: Voyage.companyID,
                              },
                            }"
                          >
                            <button class="book_btn">Otobüs Bileti Bul</button>
                          </router-link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          style="background-color: rgb(217, 217, 217); width: 125%; padding-top: 50px; padding-bottom: 50px; "
        >
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <!-- <div class="titlepage">
                //  <h2>Ticket Project</h2>
                </div> -->
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="blog_box">
                  <div class="blog_room">
                    <h3>En Fazla Tercih Edilen Firmamız:</h3>
                    <span>
                      {{ mostFrequentCompanyID }}
                    </span>
                    <p></p>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="blog_box">
                  <div class="blog_img"></div>
                  <div class="blog_room">
                    <h3>Bizlere Ulaşmak İçin:</h3>
                    <router-link to="/src/Components/Message/Message.vue">
                      <span>Mesaj Gönder </span>
                    </router-link>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  </div>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";
import axios from "axios";
Vue.use(VueResource);

export default {
  data() {
    return {
      Voyage: {
        voyageID: null,
        startingPlace: "",
        destination: null,
        startingDate: null,
        destinationDate: null,
        esimatedTime: null,
      },
      Company: {},
      username: [],
    };
  },

  created() {
    this.allVoyage();
    this.allCompany();
    // this.getCompany();
    this.formatBackendDate();

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
          //   this.Voyage.appUserID = this.username.nameIdentifier;

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
    formatBackendDate() {
      const backendDate = "2024-02-21T12:34:56";
      const dateParts = backendDate.split("T")[0].split("-");
      const year = dateParts[0];
      const month = dateParts[1];
      const day = dateParts[2];
      // Yukarıdaki parçalardan bir tarih nesnesi oluştur
      this.Voyage.startingDate = new Date(year, month - 1, day); // JavaScript'te ay 0'dan başlar, bu yüzden -1 çıkarmalıyız
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

    // getCompany(companyID) {
    //   const company = this.Company.find((c) => c.companyID === companyID);
    //   return company ? `${company.companyName}` : "gg";
    // },
  },
  computed: {
    route() {
      return {
        name: "seferler",
        query: {
          startingPlace: this.Voyage.startingPlace,
          destination: this.Voyage.destination,
          startingDate: this.Voyage.startingDate,
          destinationDate: this.Voyage.destinationDate,
          companyID: this.Voyage.companyID,
        },
      };
    },
    mostFrequentCompanyID() {
      // Bir obje oluştur ve her companyID'nin sayısını say
      const companyIDCounts = {};
      this.Voyage.forEach((voyage) => {
        const companyID = voyage.companyID;
        companyIDCounts[companyID] = (companyIDCounts[companyID] || 0) + 1;
      });

      // En çok tekrar eden companyID'yi bul
      let mostFrequentID = null;
      let maxCount = 0;
      Object.entries(companyIDCounts).forEach(([id, count]) => {
        if (count > maxCount) {
          maxCount = count;
          mostFrequentID = id;
        }
      });

      return "Pamukkale";
    },
  },
};
</script>

<style>
.online_book {
  color: red;
  background-color: red;
}
</style>
