<!-- This Component is responsible for creating the small cards with simple statics
   that displayed under the header -->
<template>
    <div class="card bg-white shadow-md p-4">
      <div class="flex justify-between items-center">
        <h3>{{ title }}</h3>
        <div :class="changeType === 'up' ? 'text-green-500' : 'text-red-500'">
          {{ changeType === 'up' ? '▲' : '▼' }} {{ change }}
        </div>
      </div>
      <div class="text-2xl font-bold">{{ value }}</div>
    </div>
  </template>
  <script>
  export default {
    props: {
      title: String,
      value: String,
      change: String,
      changeType: String
    }
  }
  </script>
  