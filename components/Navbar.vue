<template>
  <nav class="bg-green-600 text-white flex justify-between items-center h-16 w-full p-5 rounded shadow-lg">
    <router-link to='/'>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </router-link>
    <router-link to='/'>
      <h1>My itunes</h1>
    </router-link>
    <router-link to='/'>
      <button @click="$nuxt.$emit('refresh')" class='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      </button>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
  },
}
</script>
