<template>
  <div>
    <!-- Scrollbar Custom CSS -->
    <link rel="stylesheet" href="/html1/css/jquery.mCustomScrollbar.min.css" />
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
    <head>
      <link rel="stylesheet" href="/htmladmin/css/templatemo_main.css" />
    </head>
    <body>
      <div id="main-wrapper">
        <div class="navbar navbar-inverse" role="navigation">
          <div class="navbar-header">
            <div class="logo"><h1>Dashboard - Admin Template</h1></div>
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

              <li class="active">
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
                <li><a href="#">Bilet Durum</a></li>
                <li class="active">Tables</li>
              </ol>
              <h1>Manage Users</h1>
              <p>Here goes tables and users.</p>

              <div class="row margin-bottom-30">
                <div class="col-md-12"></div>
              </div>

              <div>
                <table class="table table-bordered">
                  <tr>
                    <th>Gönderen</th>
                    <th>Mesaj İçeriği</th>
                    <th>Sil</th>
                  </tr>
                  <tr v-for="message in AllMessage">
                    <td>{{ message.sender }}</td>
                    <td>{{ message.messageDetails }}</td>
                    <td>
                      <button class="btn mb-1 btn-rounded btn-danger">
                        Sil
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>
<script>
export default {
  data() {
    return {
      AllMessage: [],
    };
  },
  methods: {
    allMessage() {
      this.$http
        .get("https://localhost:44336/api/Message/AllMessage")
        .then((response) => {
          this.AllMessage = response.data;
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
  },
  created() {
    this.allMessage();
  },
};
</script>
