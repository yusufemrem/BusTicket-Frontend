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
          href="/html1/https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
        />
        <link
          rel="stylesheet"
          href="/html1/https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
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
                    Şikayet Ve Önerileriniz İçin Bizlere Mesaj Gönderin!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  contact -->
        <div class="contact">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <form id="request" class="main_form">
                  <div class="row">
                    <div class="col-md-12 ">
                      <label>Mesajınız</label>
                      <small
                        v-if="!$v.sendMessage.messageDetails.required"
                        class="form-text text-danger"
                        >Bu Alan Zorunludur</small
                      >
                      <small
                        v-if="!$v.sendMessage.messageDetails.minLength"
                        class="form-text text-muted"
                        >En Az
                        {{
                          $v.sendMessage.messageDetails.$params.minLength.min
                        }}
                        Karakterden Oluşmalıdır</small
                      >
                      <input
                        @input="$v.sendMessage.messageDetails.$touch()"
                        class="contactus"
                        type="text"
                        v-model="sendMessage.messageDetails"
                      />
                    </div>

                    <div class="col-md-12">
                      <label>Firma Seçin</label>
                      <select
                        id="citySelectStarting"
                        class="contactus"
                        v-model="sendMessage.companyID"
                      >
                        <option
                          v-for="company in Company"
                          :value="company.companyID"
                        >
                          {{ getCompany(company.companyID) }}
                        </option>
                      </select>
                    </div>

                    <div class="col-md-12">
                      <button
                        @click="saveMessage"
                        type="submit"
                        class="send_btn"
                      >
                        Gönder
                      </button>
                    </div>
                  </div>
                </form>
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
import VueRouter from "vue-router";

import { required, minLength } from "vuelidate/lib/validators";

Vue.use(VueRouter);
import axios from "axios";

export default {
  data() {
    return {
      sendMessage: {
        messageDetails: null,
        companyID: null,
      },
      Company: [],
      Message: [],
      username: {},
    };
  },
  created() {
    this.getAllCompany();
    this.getAllMessage();

    const token = localStorage.getItem("token");
    console.log("created çalıştı");
    console.log("Username:", this.username);
    if (token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log("Username4:", this.username);

      axios
        .get("https://localhost:44336/api/Auth/ValidateToken", config)
        .then((response) => {
          console.log("Token doğrulama başarılı. Cevap:", response.data);

          this.username = response.data;
          console.log("Username3:", this.username);
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
    getAllCompany() {
      this.$http
        .get("https://localhost:44336/api/Company/AllCompany")
        .then((response) => {
          this.Company = response.data;
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
    getAllMessage() {
      this.$http
        .get("https://localhost:44336/api/Message/AllMessage")
        .then((response) => {
          this.Message = response.data;
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
    saveMessage() {
      this.$store.dispatch("saveMessage", this.sendMessage);
    },
    getCompany(companyID) {
      const company = this.Company.find((c) => c.companyID === companyID);
      return company ? `${company.companyName}` : "";
    },
  },
  validations: {
    sendMessage: {
      messageDetails: {
        required,
        minLength: minLength(3),
      },
    },
  },
};
</script>
