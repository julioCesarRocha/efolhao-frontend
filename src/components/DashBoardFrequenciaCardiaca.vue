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
  name: 'BarChart',
  mounted() {
    const data = this.frequencia_cardiaca.map(item => item.frequencia_cardiaca);
    const labels = this.frequencia_cardiaca.map(item => format(new Date(item.data_criacao), 'dd/MM/yyyy'));
    const ctx = this.$refs.chartCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Frequência Cardiaca',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
  props: ['frequencia_cardiaca']
};
</script>
