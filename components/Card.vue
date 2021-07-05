<template>
  <a target="_blank" :href="url" ref="noopener noreferrer" :class="`flex justify-between items-center w-full p-5 rounded shadow-lg bg-${color}-50`">
    <div class="flex-grow flex flex-col items-center justify-center px-3">
      <h1 class="text-lg font-bold mb-2 text-center">{{album}}</h1>
      <p>{{artistName}}</p>
    </div>
    <img class="w-24 h-24 object-cover object-center rounded" :src="img" alt="">
  </a>
</template>

<script>
export default {
  props: ['artistName', 'album', 'img', 'url', 'color']
}
</script>
