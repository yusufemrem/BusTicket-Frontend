<template>
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
    <body class="main-layout inner_page">
      <div class="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <p class="margin_0">
                  Otobüs Seferleri
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div
              v-for="voyage in filteredVoyages"
              :key="voyage.voyageId"
              class="col-md-4"
            >
              <div class="blog_box">
                <div class="blog_img">
                  <figure>
                    <img src="/html1/images/1.jpg" alt="#" />
                  </figure>
                </div>

                <div class="blog_room">
                  <router-link
                    :to="{
                      name: 'detaybilet',
                      query: {
                        voyageID: voyage.voyageID,

                        seatCapacity: voyage.seatCapacity,
                        ticketPrice: voyage.ticketPrice,
                        startingPlace: $route.query.startingPlace,
                        destination: $route.query.destination,
                        expeditionStop1: voyage.expeditionStop1,
                        expeditionStop2: voyage.expeditionStop2,
                        expeditionStop3: voyage.expeditionStop3,
                      },
                    }"
                  >
                    <a>
                      <h3>
                        {{ $route.query.startingPlace }} -

                        {{ $route.query.destination }}

                        <!-- //    a: {{ $route.query.startingPlace }} b:{{
                      $route.query.destination
                    }}
                    destination -->
                      </h3>
                    </a>

                    <span>
                      {{
                        voyage.startingDate
                          | formatCommentDate(voyage.startingDate)
                      }}
                      - {{ voyage.ticketPrice }} ₺
                    </span>
                    <p>{{ getCompany(voyage.companyID) }}</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
import { router } from "../../router";

export default {
  data() {
    return {
      Voyage: [],
      Company: [],
    };
  },
  mounted() {
    const id = this.$route.params.id;
    console.log("ID:", id);
  },
  methods: {
    // handleClick(voyage) {
    //   // Seçilen seferin bilgilerini al
    //   const voyageDetails = {
    //     startingPlace: voyage.startingPlace,
    //     destination: voyage.destination,
    //     expeditionStop1: voyage.expeditionStop1,
    //     expeditionStop2: voyage.expeditionStop2,
    //     expeditionStop3: voyage.expeditionStop3,
    //     // Diğer gerekli bilgileri de buraya ekleyebilirsiniz
    //   };
    //   // Yönlendirme için gerekli bilgileri oluştur
    //   const routeParams = {
    //     name: "detaybilet",
    //     query: {
    //       voyageDetails,

    //       // Diğer gerekli bilgileri de buraya ekleyebilirsin
    //     },
    //   };

    //   // Yönlendirme işlemini gerçekleştir
    //   this.$router.push(routeParams);
    // },
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

    formatCommentWithDestinationDate(value, destinationDate) {
      const formattedDate = this.formatCommentDate(value);
      if (destinationDate) {
        return `${formattedDate} - ${destinationDate}`;
      }
      return formattedDate;
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
  },
  computed: {
    // Use a computed property to filter the voyages based on query parameters
    filteredVoyages() {
      const startingPlace = this.$route.query.startingPlace;
      const destination = this.$route.query.destination;

      const companyID = this.$route.query.companyID;
      if (!startingPlace || !destination) {
        // If query parameters are not provided, return all voyages
        return this.Voyage;
      }
      // Filter voyages based on startingPlace and destination
      return this.Voyage.filter((voyage) => {
        return (
          (voyage.startingPlace === startingPlace &&
            voyage.destination === destination) ||
          (voyage.expeditionStop1 === destination &&
            voyage.startingPlace === startingPlace) ||
          (voyage.expeditionStop1 === startingPlace &&
            voyage.expeditionStop2 === destination) ||
          (voyage.expeditionStop2 === startingPlace &&
            voyage.expeditionStop3 === destination) ||
          (voyage.startingPlace === startingPlace &&
            voyage.expeditionStop3 === destination) ||
          (voyage.expeditionStop1 === startingPlace &&
            voyage.expeditionStop3 === destination) ||
          (voyage.startingPlace === startingPlace &&
            voyage.expeditionStop2 === destination)
        );
      });
    },
  },
  created() {
    this.allVoyage();
    this.allCompany();
  },
  filters: {
    formatCommentDate(value) {
      if (typeof value === "string") {
        value = value.replace("T", " ");
        const date = new Date(value);
        const dateOptions = {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const timeOptions = {
          hour: "numeric",
          minute: "numeric",
        };
        const dateString = date.toLocaleDateString("tr-TR", dateOptions);
        const timeString = date.toLocaleTimeString("tr-TR", timeOptions);
        return `${dateString} ${timeString}`;
      }
      return value;
    },
  },
  components: { router },
};
</script>
