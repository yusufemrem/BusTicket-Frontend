<template>
  <div>
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
              <li class="active">
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
                  <button @click="downloadExcel">
                    Excel Sefer Raporunu İndir
                  </button>
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
export default {
  methods: {
    downloadExcel() {
      // Excel dosyasının indirme linkini oluştur
      const excelDownloadLink =
        "https://localhost:44336/api/ExcelReport/VoyageExcelReport"; // API rotasını uygun şekilde güncelleyin
      window.location.href = excelDownloadLink;
    },
  },
};
</script>
