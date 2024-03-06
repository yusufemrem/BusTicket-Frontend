<template>
  <div>
    <div id="chartdiv" style="width: 800px; height: 600px;">
      <h1>Chart Area</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: [],
    };
  },
  mounted() {
    this.loadGoogleChart();
  },
  methods: {
    loadGoogleChart() {
      if (
        typeof google === "undefined" ||
        typeof google.charts === "undefined"
      ) {
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/charts/loader.js";
        script.onload = () => {
          google.charts.load("current", { packages: ["corechart"] });
          google.charts.setOnLoadCallback(() => {
            this.loadChartData();
          });
        };
        document.head.appendChild(script);
      } else {
        this.loadChartData();
      }
    },
    loadChartData() {
      fetch("https://localhost:44336/api/Chart/CompanyChart2")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((chartsdata) => {
          if (chartsdata && chartsdata.jsonlist) {
            this.chartData = chartsdata.jsonlist;
            this.drawChart();
          } else {
            console.error("Invalid JSON format or missing data");
          }
        })
        .catch((error) => {
          console.error("Failed to fetch data:", error);
        });
    },
    drawChart() {
      const data = new google.visualization.DataTable();
      data.addColumn("number", "companyID");
      data.addColumn("number", "Value");

      for (let i = 0; i < this.chartData.length; i++) {
        const companyId = this.chartData[i].CompanyID.toString();
        const value /* Numeric value associated with CompanyID */ = data.addRow(
          [companyId, value]
        );
      }

      const chart = new google.visualization.PieChart(
        document.getElementById("chartdiv")
      );

      const options = {
        title: "Company Chart",
        position: "top",
        fontSize: 16,
      };

      try {
        chart.draw(data, options);
      } catch (error) {
        console.error("Error drawing chart:", error);
      }
    },
  },
};
</script>
