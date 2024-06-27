<template>
    <div class="flex">
      <Sidebar />
      <div class="flex-1 p-0">
        <Header />
        
        <div class="grid gap-5 m:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 px-6">
            <StatCard 
            statTitle="Downloads" 
            statSubtitle="10,000" 
            statIcon = "M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333"
            statArowIcon = "m5 12l7-7l7 7m-7 7V5"
            statPercent="3%"
            statAmount="3000"
            statAmountUpdate ="Last Day"

            />
            <StatCard />
            <StatCard />
            <StatCard />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
          <PageVisits />
          <SocialTraffic />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import { ref } from 'vue'
  import Header from '../components/Header.vue'
  import Sidebar from '../components/Sidebar.vue'
  // import StatCard from '../components/StatCard.vue'
  import StatCard from '../components/statCards/StatCard.vue'
  // import PieChart from '../components/PieChart.vue'
  import PageVisits from '../components/PageVisits.vue'
  import SocialTraffic from '../components/SocialTraffic.vue'
  import ShapeDivider from '../components/ShapeDivider.vue'
  
  export default {
    components: {
      Header,
      Sidebar,
      StatCard,
      // PieChart,
      PageVisits,
      SocialTraffic,
      ShapeDivider
    }
  }
  </script>
  