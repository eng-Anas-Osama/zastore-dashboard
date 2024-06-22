<template>
    <div class="flex">
      <Sidebar />
      <div class="flex-1 p-4">
        <Header />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Stat Cards -->
          <StatCard title="Traffic" value="350,897" change="3.48%" changeType="up" />
          <StatCard title="New Users" value="2,356" change="3.48%" changeType="down" />
          <StatCard title="Sales" value="924" change="1.10%" changeType="down" />
          <StatCard title="Performance" value="49,65%" change="12%" changeType="up" />
        </div>
        <!-- Pie Chart -->
        <!-- <div class="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-4">
          <PieChart />
        </div> -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <PageVisits />
          <SocialTraffic />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  import StatCard from '../components/StatCard.vue'
  // import PieChart from '../components/PieChart.vue'
  import PageVisits from '../components/PageVisits.vue'
  import SocialTraffic from '../components/SocialTraffic.vue'
  
  export default {
    components: {
      Header,
      Sidebar,
      StatCard,
      // PieChart,
      PageVisits,
      SocialTraffic
    }
  }
  </script>
  