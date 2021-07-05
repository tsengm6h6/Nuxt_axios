<template>
  <div class="w-full p-5 flex flex-col items-center">
    <div v-if="albumExits" class="space-y-8 w-full">
      <h1 class="my-8 text-center">
        This are the results for <span class="font-bold uppercase text-green-700">{{ $route.params.id }}</span>
      </h1>
      <Card
      v-for="result, index in results" :key="result.index"
      :artistName="result.artistName"
      :album="result.collectionName"
      :img="result.artworkUrl100"
      :url="result.collectionViewUrl"
      :color="color(index)"
      />
    </div>
    <div v-else>
      <h1 class="my-8">No Album Founded</h1>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  components: {
    Card,
  },
  async asyncData({ params, $axios }) {
    // 取得關鍵字的專輯，設定 10 筆資料
    const response = await $axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album&limit=10`)
    return { results: response.data.results } // async 取得資料可直接當 data 使用
  },
  computed: {
    albumExits() {
      return this.results.length > 0
    }
  },
  methods: {
    color(index){
      return index % 2 === 0 ? 'green' : 'blue'
    }
  },
}
</script>
