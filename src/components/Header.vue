<template>
  <header class="bg-blue-600 p-4 flex justify-between items-center">
    <h1 class="text-white">Welcome To Za-Store Mangment</h1>
    <div class="flex items-center">
      <!-- f<input type="text" id="searchInput" placeholder="Search here..." class="p-2 rounded-md" @keyup="search"/> -->
      <img :src="avatar?.thumbnailUrl" alt="Avatar" class="h-10 w-10 rounded-full cursor-pointer mx-4"
        @mouseover="showDropdown = true"
        @mouseleave="showDropdown = false" 
        @click="toggleMobileMenu" />
        <!-- Desktop Dropdown -->
        <div v-if="showDropdown"
          class="absolute right-5 top-14 z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
          @mouseover="showDropdown = true"
          @mouseleave="showDropdown = false">

          <p class="px-4 py-2 text-gray-800">Name: {{ user?.name }}</p>
          <p class="px-4 py-2 text-gray-800">User Name: {{ user?.username }}</p>
          <p class="px-4 py-2 text-gray-800">website: {{ user?.website }}</p>
          <p class="px-4 py-2 text-gray-800">Email: {{ user?.email }}</p>

        </div>

        <!-- Mobile FullScreen Menu -->
        <div
        v-if="showMobileMenu"
        class="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
      >
        <button
          @click="toggleMobileMenu"
          class="absolute top-4 right-4 text-gray-800 text-2xl"
        >&times;</button>
        <img :src="avatar?.thumbnailUrl" alt="Avatar" class="h-10 w-10 rounded-full cursor-pointer mx-4" />
          <p class="px-4 py-2  text-gray-800">Name: {{ user?.name }}</p>
          <p class="px-4 py-2 text-gray-800">User Name: {{ user?.username }}</p>
          <p class="px-4 py-2 text-gray-800">website: {{ user?.website }}</p>
          <p class="px-4 py-2 text-gray-800">Email: {{ user?.email }}</p>
      </div>
    </div>
  </header>
</template>
<script>
import api from '../services/api';
export default {
  name: 'Header',
  data() {
    return {
      user: null,
      avatar: null,
      showDropdown: false,
      showMobileMenu: false,
      // Add an array to store your website content
      content: [],
      searchTerm: '',
    };
  },
  created() {
    this.fetchUserData();
    this.fetchPhotoData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await api.getUserData();
        this.user = response.data;
        // console.log(response)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    async fetchPhotoData(){
      try{
        const response = await api.getPhotosData();
        this.avatar = response.data;
        // console.log(response);
      }
      catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  },
};
</script>

  