<template>
    <div class="bg-white shadow rounded-lg p-4">
      <h2 class="text-xl font-bold mb-4">Page Visits</h2>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visitors</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unique Users</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bounce Rate</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="page in pages" :key="page.name">
            <td class="px-2 py-4 whitespace-nowrap">{{ page.name }}</td>
            <td class="px-2 py-4 whitespace-nowrap">{{ page.visitors }}</td>
            <td class="px-2 py-4 whitespace-nowrap">{{ page.uniqueUsers }}</td>
            <td class="px-2 py-4 whitespace-nowrap">{{ page.bounceRate }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageVisits',
    data() {
      return {
        pages: [
          { name: '/argon/', visitors: 4569, uniqueUsers: 340, bounceRate: 46.53 },
          { name: '/argon/index.html', visitors: 3985, uniqueUsers: 319, bounceRate: 46.53 },
          { name: '/argon/charts.html', visitors: 3513, uniqueUsers: 294, bounceRate: 36.49 },
          { name: '/argon/tables.html', visitors: 2050, uniqueUsers: 147, bounceRate: 50.87 },
          { name: '/argon/profile.html', visitors: 1795, uniqueUsers: 190, bounceRate: 46.53 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  