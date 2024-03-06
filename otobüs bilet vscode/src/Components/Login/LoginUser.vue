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
                  <h2>Kullanıcı Giriş</h2>
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
                <form
                  @submit.prevent="submitForm"
                  id="request"
                  class="main_form"
                >
                  <div class="row">
                    <div class="col-md-12 ">
                      <input
                        class="contactus"
                        placeholder="E Posta"
                        type="type"
                        name="Name"
                        v-model="Login.userName"
                      />
                    </div>

                    <div class="col-md-12">
                      <input
                        class="contactus"
                        placeholder="Şifre "
                        type="password"
                        name="Şifre"
                        v-model="Login.password"
                      />
                    </div>

                    <div class="col-md-12">
                      <button
                        @click="submitForm"
                        type="submit"
                        class="send_btn"
                      >
                        Giriş Yap
                      </button>
                    </div>
                  </div>
                </form>
                <hr />
                <router-link to="/src/Components/Register/Register.vue">
                  <button type="submit">
                    Üye Değil Misin ?
                  </button>
                </router-link>
                <hr />
                <router-link to="/src/Components/Login/Login.vue">
                  <button type="submit">
                    Yetkili Giriş
                  </button>
                </router-link>
              </div>
              <img class="col-md-6" src="/html1/images/1.jpg" />
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
import router from "../../router";

Vue.use(VueRouter);
import axios from "axios";
export default {
  data() {
    return {
      Login: {
        userName: null,
        password: null,
      },
    };
  },

  methods: {
    submitForm() {
      axios
        .post("https://localhost:44336/api/Auth/Login", {
          userName: this.Login.userName,
          password: this.Login.password,
        })
        .then((response) => {
          this.Login = response.data;

          localStorage.setItem("token", response.data.token);
          this.$router.push("/src/Components/Home/HomePage.vue");
        })
        .catch((error) => {
          console.error("Giriş hatası:", error);
          alert("kullanıcı adı veya şifre yanlış");
        });
    },
  },
};
</script>
