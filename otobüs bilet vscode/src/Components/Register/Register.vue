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
                  <h2>Kayıt Ol</h2>
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
                  id="request"
                  class="main_form"
                  @submit.prevent="saveRegister"
                >
                  <div class="row">
                    <div class="col-md-12 ">
                      <input
                        class="contactus"
                        placeholder="İsim"
                        type="type"
                        name="Name"
                        v-model="Register.name"
                      />
                    </div>
                    <div class="col-md-12 ">
                      <input
                        class="contactus"
                        placeholder="Soyisim"
                        type="type"
                        name="Name"
                        v-model="Register.surname"
                      />
                    </div>
                    <div class="col-md-12 ">
                      <input
                        class="contactus"
                        placeholder="Kullanıcı Adı"
                        type="type"
                        name="Name"
                        v-model="Register.userName"
                      />
                    </div>
                    <div class="col-md-12">
                      <input
                        class="contactus"
                        placeholder="Email"
                        type="type"
                        name="Email"
                        v-model="Register.mail"
                      />
                    </div>
                    <div class="col-md-12">
                      <input
                        class="contactus"
                        placeholder="Şifre"
                        type="password"
                        name="Phone Number"
                        v-model="Register.password"
                      />
                    </div>
                    <div class="col-md-12">
                      <input
                        class="contactus"
                        placeholder="Şifre Tekrar"
                        type="password"
                        name="Phone Number"
                        v-model="Register.confirmPassword"
                      />
                    </div>

                    <div class="col-md-12">
                      <button
                        type="submit"
                        @click="saveRegister"
                        class="send_btn"
                      >
                        Kayıt Ol
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
export default {
  data() {
    return {
      Register: {
        name: null,
        surname: null,
        userName: null,
        mail: null,
        password: null,
        confirmPassword: null,
      },
    };
  },
  methods: {
    saveRegister() {
      this.$store.dispatch("saveRegister", this.Register);
      this.$router.push("/");
    },
  },
};
</script>
