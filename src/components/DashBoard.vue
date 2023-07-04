<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart } from 'chart.js';
import 'chart.js/auto';
import { format } from 'date-fns';

export default {
  name: 'LineChart',
  mounted() {
    const data = this.registro.map(item => item.temperatura);
    const labels = this.registro.map(item => format(new Date(item.data_criacao), 'dd/MM/yyyy'));
    console.log(data, labels);
    const ctx = this.$refs.chartCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['01/01/2023', '02/01/2023', '03/01/2023', '04/01/2023', '05/01/2023'], // Rótulos para cada ponto do gráfico
        datasets: [{
          label: 'Temperatura',
          data: [38.5, 37.5, 36.0, 36.5, 37.0],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  },
  props: ['registro']
};
</script>
