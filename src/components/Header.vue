<template>
  <header class="bg-base-1100 p-4 flex justify-between items-center">
    <navbar />
    <!-- <h1 class="text-white">Welcome To Za-Store Mangment</h1> -->
  </header>
</template>
<script>
import api from '../services/api';
import navbar from './navbar.vue';
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
            }
            catch (error) {
                console.error('Error fetching user data:', error);
            }
        },
        async fetchPhotoData() {
            try {
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
    components: { navbar }
};
</script>

  