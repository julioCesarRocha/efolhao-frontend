<template>
    <div>
      <canvas ref="lineChart"></canvas>
    </div>
  </template>
  
  <script>
  import Sinais from "../services/sinaisvitais";
  import Chart from 'chart.js';
//   import axios from 'axios';
  
  export default {
    name: 'DashBoard',
    data() {
      return {
        chartData: [],
        chartLabels: []
      };
    },
    mounted() {
        const response = Sinais.listarById('c48faba9-abbf-4d76-a5ee-e7e1086d6dd0');
        console.log(response);
    //   axios.get('sua-api.com/dados-do-grafico')
        // .then(response => {
          this.chartData = response.data.map(item => item.valor);
          this.chartLabels = response.data.map(item => item.data);
          console.log(this.chartData);
          this.renderChart();
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    },
    methods: {
      renderChart() {
        new Chart(this.$refs.lineChart, {
          type: 'line',
          data: {
            labels: this.chartLabels,
            datasets: [
              {
                label: 'Meu gráfico em linha',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                data: this.chartData
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }
    }
  };
  </script>