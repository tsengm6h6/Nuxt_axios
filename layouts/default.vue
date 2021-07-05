<template>
  <div class="container px-8 py-4 mx-auto lg:max-w-lg">
     <Navbar />
     <Nuxt />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>
