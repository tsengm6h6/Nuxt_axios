<template>
  <div class="w-full p-5 flex flex-col items-center">
    <h1 class="text-lg font-bold">Search iTunes</h1>
    <form @submit.prevent="formSubmit">
      <input class="border py-2 px-8 mt-3 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-opacity-0" type="text" placeholder="Enter the artist" v-model="keyword" autofocus>
      <small class="block text-sm text-gray-500 mt-5">
        Press <button class="py-1 px-2 bg-green-900 text-white rounded uppercase" @submit.prevent="formSubmit">enter</button> to start searching</small>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'default',
  created() {
    this.$nuxt.$on('refresh', () => {
      this.keyword = ''
    })
  },
  data(){
    return {
      keyword: ''
    }
  },
  methods: {
    formSubmit(){
      if(!this.keyword) {
        alert('請輸入搜尋關鍵字')
        return
      }
      this.$router.push(`results/${this.keyword}`)
    }
  },
}
</script>
