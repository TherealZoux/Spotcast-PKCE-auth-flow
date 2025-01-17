<template>
  <li class="show ">
    <a class="flex  gap-4 w-[14rem] h-[4rem] items-center  relative" :href="showUrl">
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

<style lang="css">
.show {
  position: relative;
}

.show::before {
  position: absolute;
  content: '';
  width: 0;
  height: 100%;
  background-color: #3c3c3c2b;
  left: 0;
  transition: width 0.5s ease;
  border-top: 2px solid #3498db;
}

.show:hover::before {
  width: 100%;
}
</style>
