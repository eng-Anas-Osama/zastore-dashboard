<template>
    <div>
      <Pie :data="chartData" :options="chartOptions"/>
    </div>
  </template>
  
  <script>
  import { Pie } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
  
  export default {
    name: 'PieChart',
    components: {
      Pie,
    },
    data() {
      return {
        chartData: {
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [
            {
              label: 'Dataset 1',
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              data: [40, 20, 10],
            },
          ],
        },
        chartOptions: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Pie Chart Example',
            },
          },
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  