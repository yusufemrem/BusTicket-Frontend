<template>
  <div>
    <!DOCTYPE html>
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
            <li class="active">
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
              <div class="col-md-12">
                <ul class="nav nav-pills">
                  <li class="active">
                    <a href="#">New Users <span class="badge">42</span></a>
                  </li>
                  <li>
                    <a href="#">Active Users <span class="badge">107</span></a>
                  </li>
                  <li>
                    <a href="#">Expired Users <span class="badge">3</span></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="btn-group pull-right" id="templatemo_sort_btn">
                  <!-- <button type="button" class="btn btn-default">
                        Sort by
                      </button>
                      <button
                        type="button"
                        class="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span class="caret"></span>
                        <span class="sr-only">Toggle Dropdown</span>
                      </button> -->
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">First Name</a></li>
                    <li><a href="#">Last Name</a></li>
                    <li><a href="#">Username</a></li>
                  </ul>
                </div>
                <div
                  v-for="cupon in AllCupon"
                  :key="cupon.cuponID"
                  class="table-responsive"
                >
                  <table class="table table-striped table-hover table-bordered">
                    <tr>
                      <th>Kupon ID</th>
                      <th>Kupon Adı</th>
                      <th>İndirim Tutarı</th>
                    </tr>
                    <tr>
                      <td>{{ cupon.discountID }}</td>
                      <td>{{ cupon.discountName }}</td>
                      <td>{{ cupon.discountAmount }}</td>

                      <td>
                        <button
                          @click="deleteCupon(cupon.discountID)"
                          type="submit"
                          class="btn-danger btn btn-default"
                        >
                          Sil
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="template-page-wrapper">
                  <form
                    class="form-horizontal templatemo-signin-form"
                    role="form"
                    action="index.html"
                    method="post"
                  >
                    <div class="form-group">
                      <div class="col-md-12">
                        <label for="username" class="col-sm-2 control-label"
                          >İndirim Tutarı</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            v-model="CreateCode.discountAmount"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="col-md-12">
                        <div class="col-sm-offset-2 col-sm-10">
                          <button
                            @click="saveDiscount"
                            type="submit"
                            class="btn btn-default"
                          >
                            Kupon Oluştur
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
      AllCupon: [],
      CreateCode: { discountAmount: null },
    };
  },
  created() {
    this.allCupon();
  },
  methods: {
    allCupon() {
      this.$http
        .get("https://localhost:44336/api/Discount/AllCupon")
        .then((response) => {
          this.AllCupon = response.data;
        })
        .catch((error) => {
          console.error("Error fetching comment:", error);
        });
    },
    saveDiscount() {
      this.$store.dispatch("saveDiscount", this.CreateCode);
      this.$router.push("/src/Components/Admin/AddVoyage.vue");
    },
    deleteCupon(id) {
      this.$http
        .delete("https://localhost:44336/api/Discount/DeleteCupon/" + id)
        .then(() => {
          this.AllCupon = this.AllCupon.filter((c) => c.discountID !== id);
        })
        .catch((error) => {
          console.error("Error deleting :", error);
        });
    },
  },

  components: { router },
};
</script>
