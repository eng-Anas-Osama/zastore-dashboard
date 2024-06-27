
<div class="flex items-center">
    <img :src="avatar?.thumbnailUrl" alt="Avatar" class="h-10 w-10 rounded-full cursor-pointer mx-4"
      @mouseover="showDropdown = true"
      @mouseleave="showDropdown = false" 
      @click="toggleMobileMenu" />
    <div v-if="showDropdown"
      class="absolute right-5 top-14 z-10 mt-2 w-48 shadow rounded-box py-2"
      @mouseover="showDropdown = true"
      @mouseleave="showDropdown = false">

      <p class="text-base font-normal text-gray-700 px-4 py-2">Name: {{ user?.name }}</p>
      <p class="text-base font-normal text-gray-700 px-4 py-2">User Name: {{ user?.username }}</p>
      <p class="text-base font-normal text-gray-700 px-4 py-2">website: {{ user?.website }}</p>
      <p class="text-base font-normal text-gray-700 px-4 py-2">Email: {{ user?.email }}</p>

    </div>

    <div
      v-if="showMobileMenu"
      class="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <button
        @click="toggleMobileMenu"
        class="absolute top-4 right-4 text-gray-800 text-2xl"
      >&times;</button>
      <img :src="avatar?.thumbnailUrl" alt="Avatar" class="h-10 w-10 rounded-full cursor-pointer mx-4" />
      <p class="text-base font-normal text-gray-700 px-4 py-2">Name: {{ user?.name }}</p>
      <p class="text-base font-normal text-gray-700 px-4 py-2">User Name: {{ user?.username }}</p>
      <p class="text-base font-normal text-gray-700 px-4 py-2">website: {{ user?.website }}</p>
      <p class="text-base font-normal text-gray-700 px-4 py-2">Email: {{ user?.email }}</p>
    </div>
  </div>