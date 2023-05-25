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
    const data = this.pa_media.map(item => item.pa_media);
    const labels = this.pa_media.map(item => format(new Date(item.data_criacao), 'dd/MM/yyyy'));
    const ctx = this.$refs.chartCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Pressão Arterial',
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
  props: ['pa_media']
};
</script>
