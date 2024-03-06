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
        <div class="back_re">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title">
                  <h2>
                    Bilet Detay - {{ $route.query.startingPlace }}-
                    {{ $route.query.destination }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- our_room -->
        <div class="our_room">
          <div class="container">
            <div class="row">
              <!-- <div class="col-md-4 col-sm-6">
                <div id="serv_hover" class="room">
                  <div class="room_img">
                    <figure><img src="images/room1.jpg" alt="#" /></figure>
                  </div>
                  <div class="bed_room">
                    <h3></h3>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there
                    </p>
                  </div>
                </div>
              </div> -->

              <div
                class="col-md-4 col-sm-6"
                v-for="getTicket in filteredTicket"
              >
                <div
                  id="serv_hover"
                  class="room"
                  v-if="isSeatOccupiedBetweenStops(getTicket.seatNumber)"
                >
                  <div class="room_img"></div>
                  <div class="bed_room">
                    <h3>Koltuk Numarası {{ getTicket.seatNumber }}</h3>
                    <p>Bilet Durumu : Dolu</p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <!-- end our_room -->

        <button type="submit" @click="showTicketForm" class="book_btn">
          Bilet Satın Al
        </button>

        <!--  footer -->
        <div>
          <!-- Diğer HTML kodları burada... -->
        </div>
        <div v-if="showBuyForm">
          <html lang="en">
            <!-- body -->
            <body class="main-layout">
              >

              <!--  contact -->
              <div class="contact">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        type="text"
                        v-model="couponName"
                        placeholder="Kupon Adı"
                      />

                      <p v-if="couponDiscount !== null">{{ couponDiscount }}</p>
                      <form id="request" class="main_form">
                        <div class="row">
                          <div class="col-md-12">
                            <label for="seatNumber">Koltuk Numarası:</label>
                            <select
                              class="contactus"
                              v-model="BuyTicket.seatNumber"
                              id="seatNumber"
                            >
                              <option
                                v-for="seatNumber in seatNumberOptions"
                                :key="seatNumber"
                                :value="seatNumber"
                                :disabled="isSeatOccupied(seatNumber)"
                              >
                                {{ seatNumber }}
                                {{ isSeatOccupied(seatNumber) ? "(Dolu)" : "" }}
                              </option>
                            </select>

                            <div class="row">
                              <div class="col-md-6">
                                <input
                                  placeholder="Kart Numarası"
                                  class="contactus"
                                />
                              </div>
                              <div class="col-md-6">
                                <input placeholder="CCV" class="contactus" />
                              </div>
                            </div>
                          </div>

                          <div class="col-md-12">
                            <button @click="saveTicket" class="send_btn">
                              Bilet Al
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-6">
                      <div class="map_main">
                        <div class="map-responsive">
                          <iframe
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                            width="600"
                            height="400"
                            frameborder="0"
                            style="border:0; width: 100%;"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end contact -->
              <!--  footer -->
            </body>
          </html>
        </div>
        <footer>
          <div class="footer">
            <div class="container">
              <div class="row">
                <div class=" col-md-4">
                  <h3>Contact US</h3>
                  <ul class="conta">
                    <li>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      Address
                    </li>
                    <li>
                      <i class="fa fa-mobile" aria-hidden="true"></i> +01
                      1234569540
                    </li>
                    <li>
                      <i class="fa fa-envelope" aria-hidden="true"></i
                      ><a href="#"> demo@gmail.com</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h3>Menu Link</h3>
                  <ul class="link_menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="about.html"> about</a></li>
                    <li class="active"><a href="room.html">Our Room</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <h3>News letter</h3>
                  <form class="bottom_form">
                    <input
                      class="enter"
                      placeholder="Enter your email"
                      type="text"
                      name="Enter your email"
                    />
                    <button class="sub_btn">subscribe</button>
                  </form>
                  <ul class="social_icon">
                    <li>
                      <a href="#"
                        ><i class="fa fa-facebook" aria-hidden="true"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-twitter" aria-hidden="true"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-linkedin" aria-hidden="true"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-youtube-play" aria-hidden="true"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="copyright">
              <div class="container">
                <div class="row">
                  <div class="col-md-10 offset-md-1">
                    <p>
                      © 2019 All Rights Reserved. Design by
                      <a href="https://html.design/"> Free Html Templates</a>
                      <br /><br />
                      Distributed by
                      <a href="https://themewagon.com/" target="_blank"
                        >ThemeWagon</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <!-- end footer -->
        <!-- Javascript files-->
      </body>
    </html>
  </div>
</template>

<script>
import { router } from "../../router";
import axios from "axios";
import Payment from "../Payment/Payment.vue";

export default {
  components: {
    mostFrequentCompanyName: null,
  },
  data() {
    return {
      AllCupon: [],
      Ticket: [],
      User: [],
      showBuyForm: false,
      BuyTicket: {
        ticketPrice: this.$route.query.ticketPrice,
        userID: 1,
        seatNumber: null,
        ticketStatus: "Aktif",
        voyageID: this.$route.query.voyageID,
        appUserID: null,
        userStartingPlace: this.$route.query.startingPlace,
        userDestination: this.$route.query.destination,
      },
      seatCapacity: this.$route.query.seatCapacity,
      occupiedSeatNumbers: [],
      username: [],
    };
  },
  computed: {
    filteredTicket() {
      const voyageID = this.$route.query.voyageID;

      console.log(voyageID);
      return this.Ticket.filter((tickets) => tickets.voyageID === voyageID);
    },

    seatNumberOptions() {
      // Generate an array from 1 to seatCapacity
      return Array.from({ length: this.seatCapacity }, (_, index) => index + 1);
    },
  },
  created() {
    this.ticketAllDetail();
    this.allCupon();
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
  },
  methods: {
    getCouponDiscountAmount(couponName) {
      const foundCoupon = this.AllCupon.find(
        (coupon) => coupon.discountName === couponName
      );
      if (foundCoupon) {
        return foundCoupon.discountAmount;
      } else {
        return 0;
      }
    },
    showCouponDiscount() {
      this.couponDiscount = this.getCouponDiscountAmount(this.couponName);
    },
    isSeatOccupied(seatNumber) {
      const voyageID = this.$route.query.voyageID;
      const startingPlace = this.$route.query.startingPlace;
      const destination = this.$route.query.destination;
      const expeditionStop1 = this.$route.query.expeditionStop1;
      const expeditionStop2 = this.$route.query.expeditionStop2;
      const expeditionStop3 = this.$route.query.expeditionStop3;

      // Eğer startingPlace ve destination bilgileri yoksa hiçbir koltuk dolu sayılmayacak
      if (!startingPlace || !destination) {
        return false;
      }

      // Koltuğun belirtilen seyahate ait olduğundan ve aktif olduğundan emin olun
      const isCorrectVoyage = this.Ticket.some(
        (ticket) =>
          ticket.seatNumber === seatNumber &&
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif"
      );

      if (!isCorrectVoyage) {
        return false;
      }

      // Başlangıç noktasından ilk durak noktasına kadar olan kısımda dolu koltukları kontrol et
      const isStartingToFirstStopOccupied = this.Ticket.some(
        (ticket) =>
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ticket.userStartingPlace === startingPlace &&
          ticket.userDestination === expeditionStop1 &&
          ticket.seatNumber === seatNumber
      );
      const isStartingToFirstStopOccupied2 = this.Ticket.some(
        (ticket) =>
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ticket.userStartingPlace === startingPlace &&
          ticket.userDestination === expeditionStop2 &&
          ticket.seatNumber === seatNumber
      );
      const isStartingToFirstStopOccupied3 = this.Ticket.some(
        (ticket) =>
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ticket.userStartingPlace === startingPlace &&
          ticket.userDestination === expeditionStop3 &&
          ticket.seatNumber === seatNumber
      );
      const isStartingToFirstStopOccupied4 = this.Ticket.some(
        (ticket) =>
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ticket.userStartingPlace === expeditionStop2 &&
          ticket.userDestination === expeditionStop3 &&
          ticket.seatNumber === seatNumber
      );
      const isStartingToFirstStopOccupied5 = this.Ticket.some(
        (ticket) =>
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ticket.userStartingPlace === expeditionStop1 &&
          ticket.userDestination === expeditionStop3 &&
          ticket.seatNumber === seatNumber
      );
      const isStartingToFirstStopOccupied6 = this.Ticket.some(
        (ticket) =>
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ticket.userStartingPlace === startingPlace &&
          ticket.userDestination === destination &&
          ticket.seatNumber === seatNumber
      );
      // İlk durak noktasından son durak noktasına kadar olan kısımda dolu koltukları kontrol et

      // Son durak noktasından hedef noktaya kadar olan kısımda dolu koltukları kontrol et
      const isLastStopToDestinationOccupied = this.Ticket.some(
        (ticket) =>
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ticket.userStartingPlace === expeditionStop2 &&
          ticket.userDestination === destination &&
          ticket.seatNumber === seatNumber
      );
      const isLastStopToDestinationOccupied2 = this.Ticket.some(
        (ticket) =>
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ticket.userStartingPlace === expeditionStop1 &&
          ticket.userDestination === destination &&
          ticket.seatNumber === seatNumber
      );
      const isLastStopToDestinationOccupied3 = this.Ticket.some(
        (ticket) =>
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ticket.userStartingPlace === expeditionStop2 &&
          ticket.userDestination === destination &&
          ticket.seatNumber === seatNumber
      );
      const isLastStopToDestinationOccupied4 = this.Ticket.some(
        (ticket) =>
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ticket.userStartingPlace === expeditionStop3 &&
          ticket.userDestination === destination &&
          ticket.seatNumber === seatNumber
      );
      // Tüm koşullar sağlanıyorsa koltuk dolu kabul edilir
      return (
        isStartingToFirstStopOccupied ||
        isLastStopToDestinationOccupied ||
        isStartingToFirstStopOccupied2 ||
        isStartingToFirstStopOccupied3 ||
        isStartingToFirstStopOccupied4 ||
        isStartingToFirstStopOccupied5 ||
        isStartingToFirstStopOccupied6 ||
        isLastStopToDestinationOccupied2 ||
        isLastStopToDestinationOccupied3 ||
        isLastStopToDestinationOccupied4
      );
    },
    isSeatOccupiedBetweenStops(seatNumber) {
      const voyageID = this.$route.query.voyageID;
      const startingPlace = this.$route.query.startingPlace;
      const destination = this.$route.query.destination;
      const expeditionStop1 = this.$route.query.expeditionStop1;
      const expeditionStop2 = this.$route.query.expeditionStop2;
      const expeditionStop3 = this.$route.query.expeditionStop3;

      // Eğer belirli bir seyahate ait değilse veya başlangıç ve hedef noktaları yoksa, null döndürürüz.
      if (!voyageID || !startingPlace || !destination) {
        return null;
      }

      // Koltuğun belirtilen seyahate ait olduğundan ve aktif olduğundan emin olun
      const isCorrectVoyage = this.Ticket.some(
        (ticket) =>
          ticket.seatNumber === seatNumber &&
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif"
      );

      if (!isCorrectVoyage) {
        return null;
      }

      // Koltuğun belirli bir durak aralığında dolu olup olmadığını kontrol et
      const isOccupied = this.Ticket.some(
        (ticket) =>
          ticket.seatNumber === seatNumber &&
          ticket.voyageID === voyageID &&
          ticket.ticketStatus === "Aktif" &&
          ((ticket.userStartingPlace === startingPlace &&
            ticket.userDestination === expeditionStop1) ||
            (ticket.userStartingPlace === expeditionStop1 &&
              ticket.userDestination === expeditionStop2) ||
            (ticket.userStartingPlace === expeditionStop2 &&
              ticket.userDestination === expeditionStop3) ||
            (ticket.userStartingPlace === expeditionStop3 &&
              ticket.userDestination === destination) ||
            (ticket.userStartingPlace === startingPlace &&
              ticket.userDestination === destination) ||
            (ticket.userStartingPlace === startingPlace &&
              ticket.userDestination === expeditionStop3) ||
            (ticket.userStartingPlace === startingPlace &&
              ticket.userDestination === expeditionStop2) ||
            (ticket.userStartingPlace === expeditionStop1 &&
              ticket.userDestination === expeditionStop3))
        //     (voyage.startingPlace === startingPlace &&
        //   voyage.destination === destination) ||
        // (voyage.expeditionStop1 === destination &&
        //   voyage.startingPlace === startingPlace) ||
        // (voyage.expeditionStop1 === startingPlace &&
        //   voyage.expeditionStop2 === destination) ||
        // (voyage.expeditionStop2 === startingPlace &&
        //   voyage.expeditionStop3 === destination) ||
        // (voyage.startingPlace === startingPlace &&
        //   voyage.expeditionStop3 === destination) ||
        // (voyage.expeditionStop1 === startingPlace &&
        //   voyage.expeditionStop3 === destination) ||
        // (voyage.startingPlace === startingPlace &&
        //   voyage.expeditionStop2 === destination)
      );

      return isOccupied ? "Dolu" : null;
    },
    // Diğer metodlar...
    ticketAllDetail() {
      this.$http
        .get(`https://localhost:44336/api/Ticket/TicketDetail`)
        .then((response) => {
          console.log(response.body);
          this.Ticket = response.data;
          this.occupiedSeatNumbers = this.Ticket.map(
            (ticket) => ticket.seatNumber
          );
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
    allCupon() {
      this.$http
        .get(`https://localhost:44336/api/Discount/AllCupon`)
        .then((response) => {
          console.log(response.body);
          this.AllCupon = response.data;
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
    showTicketForm() {
      this.showBuyForm = !this.showBuyForm;
    },

    saveTicket() {
      this.BuyTicket.appUserID = this.username.nameIdentifier;

      const couponDiscount = this.getCouponDiscountAmount(this.couponName);

      // Kupon indirimi uygula
      const totalPrice = this.BuyTicket.ticketPrice - couponDiscount;

      // Daha öncekilerle birlikte kalan işlemler
      this.BuyTicket.ticketPrice = totalPrice;

      this.$store.dispatch("saveTicket", this.BuyTicket);
      alert("Biletiniz Oluşturuldu. İyi Yolculuklar Dileriz..");
    },
  },
  components: { router, Payment },
};
</script>
