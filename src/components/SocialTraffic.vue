<template>
    <div class="bg-white shadow rounded-lg p-4">
      <h2 class="text-xl font-bold mb-4">Social Traffic</h2>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referral</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visitors</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="traffic in socialTraffic" :key="traffic.referral">
            <td class="px-6 py-4 whitespace-nowrap">{{ traffic.referral }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ traffic.visitors }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ traffic.percentage }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SocialTraffic',
    data() {
      return {
        socialTraffic: [
          { referral: 'Facebook', visitors: 1480, percentage: 60 },
          { referral: 'Facebook', visitors: 5480, percentage: 70 },
          { referral: 'Google', visitors: 4807, percentage: 80 },
          { referral: 'Instagram', visitors: 3678, percentage: 75 },
          { referral: 'Twitter', visitors: 2645, percentage: 30 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  