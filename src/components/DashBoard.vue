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
        labels: labels, // Rótulos para cada ponto do gráfico
        datasets: [{
          label: 'Temperatura',
          data: data,
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
