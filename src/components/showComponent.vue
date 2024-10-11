<template>
  <li class=" ">
    <a class="flex gap-4 w-[12rem] h-[4rem] items-center bg-[#121212 relative" :href="showUrl">
      <img :src="showImg" class="w-[4rem] h-[4rem]" />
      <div>
        <h1 class="h-[1.5rem] overflow-hidden">{{ showName }}</h1>
        <span class="text-[#5e5e5e] text-[12px] flex h-4 overflow-hidden">{{ showArtist }}</span>
      </div>
    </a>
  </li>
</template>

<script setup>
const props = defineProps([
  "showImg",
  "showName",
  "showArtist",
  "showId",
  "showUrl",
]);
</script>
