<template>
  <div>
    <head>
      <meta charset="utf-8" />
      <!--[if IE
        ]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"
      /><![endif]-->
      <title>Dashboard, Free HTML5 Admin Template</title>
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width" />
      <link rel="stylesheet" href="/htmladmin/css/templatemo_main.css" />
      <!-- 
Dashboard Template 
http://www.templatemo.com/preview/templatemo_415_dashboard
-->
    </head>
    <body>
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
            <li class="active">
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
            <div class="row">
              <div class="col-md-6">
                <div class="templatemo-alerts">
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="alert alert-warning alert-dismissible"
                        role="alert"
                      >
                        <button
                          type="button"
                          class="close"
                          data-dismiss="alert"
                        >
                          <span aria-hidden="true">&times;</span
                          ><span class="sr-only">Close</span>
                        </button>
                        <strong>{{ totalVoyageCount }}</strong> Aktif Sefer
                        Sayısı
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div
                        class="alert alert-danger alert-dismissible"
                        role="alert"
                      >
                        <button
                          type="button"
                          class="close"
                          data-dismiss="alert"
                        >
                          <span aria-hidden="true">&times;</span
                          ><span class="sr-only">Close</span>
                        </button>
                        <strong>{{ totalTicketCount }}</strong> Aktif Bilet
                        Sayısı
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div
                        class="alert alert-info alert-dismissible"
                        role="alert"
                      >
                        <button
                          type="button"
                          class="close"
                          data-dismiss="alert"
                        >
                          <span aria-hidden="true">&times;</span
                          ><span class="sr-only">Close</span>
                        </button>
                        <strong>{{ totalMessageCount }}</strong> Mesaj
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div id="chartdiv" style="width: 800px; height: 600px;">
                  <h1>chart alanı</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="confirmModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span
                  ><span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">
                  Are you sure you want to sign out?
                </h4>
              </div>
              <div class="modal-footer">
                <a href="sign-in.html" class="btn btn-primary">Yes</a>
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer class="templatemo-footer">
          <div class="templatemo-copyright">
            <p>Copyright &copy; 2084 Your Company Name</p>
          </div>
        </footer>
      </div>
    </body>
  </div>
</template>

<script>
import router from "../../router";

export default {
  data() {
    return {
      Voyage: [],
      Ticket: [],
      Message: [],
      totalVoyageCount: 0,
      totalTicketCount: 0,
      totalMessageCount: 0,
      chartData: [],
    };
  },
  mounted() {
    // Google Chart API yüklü değilse yükle
    if (typeof google === "undefined" || typeof google.charts === "undefined") {
      this.loadGoogleChart();
    } else {
      // Google Chart API zaten yüklüysa verileri yükle ve çizimi gerçekleştir
      this.loadChartData();
    }
  },
  methods: {
    loadGoogleChart() {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.onload = () => {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(() => {
          this.loadChartData();
        });
      };
      document.head.appendChild(script);
    },
    loadChartData() {
      fetch("https://localhost:44336/api/Chart/CompanyChart")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((chartsdata) => {
          if (chartsdata && chartsdata.jsonlist) {
            this.chartData = chartsdata.jsonlist;
            this.drawChart(); // API yüklendikten sonra çizimi gerçekleştir
          } else {
            console.error("Geçersiz JSON formatı");
          }
        })
        .catch((error) => {
          console.error("Veri alınamadı:", error);
        });
    },
    drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn("string", "companyname");
      data.addColumn("number", "companycount");

      for (var i = 0; i < this.chartData.length; i++) {
        data.addRow([
          this.chartData[i].companyname,
          this.chartData[i].companycount,
        ]);
      }

      var chart = new google.visualization.PieChart(
        document.getElementById("chartdiv")
      );

      chart.draw(data, {
        title: "Google Chart Core Projesi",
        position: "top",
        fontsize: "16px",
      });
    },
    allVoyage() {
      this.$http
        .get("https://localhost:44336/api/Voyage/AllVoyage")
        .then((response) => {
          this.Voyage = response.data;
          this.totalVoyageCount = this.Voyage.length;
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
    allTicket() {
      this.$http
        .get("https://localhost:44336/api/Ticket/TicketDetail")
        .then((response) => {
          this.Ticket = response.data;
          this.totalTicketCount = this.Ticket.length;
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
          this.totalMessageCount = this.Message.length;
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
  },

  created() {
    this.allVoyage();
    this.allTicket();
    this.getAllMessage();
  },

  components: { router },
};
</script>
