<template>
  <li class="flex-1 min-w-[14rem] ">
    <a class="flex show gap-4 h-[4rem] items-center  relative" :href="showUrl">
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
  content: '';
  position: absolute;
  background: #3498db;
  width: 0%;
  height: 100%;
  opacity: 0.2;
  transition: width 0.5s ease;
  z-index: 0;
}

.show:hover::before {
  width: 100%;
}

.show img {
  z-index: 1;
}
</style>
