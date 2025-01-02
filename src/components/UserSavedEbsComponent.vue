<template>
  <section class="flex items-center justify-center bg-[#141414] p-4 rounded-2xl">
    <ul class="w-full flex flex-wrap gap-4" v-if="saved.total > 0">
      <showComponent v-for="item in userSavedData" :showImg="item.episode?.images?.[0]?.url || defaultImage"
        :showName="item.episode.name" :showArtist="item.episode.show.name"
        :showUrl="item.episode.external_urls.spotify" />
    </ul>
    <div class="bg-[#1a1a1a] w-[20rem] p-4 rounded text-[#8c8c8c] mr-20 " v-else>
      <p>Your saved episodes will appear here</p>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import defaultImage from '../assets/2559779_media_network_social_spotify_icon.svg'
const store = useStore();
const saved = computed(() => store.getters.saved);
const userSavedData = computed(() => saved.value.items.filter(item => item.episode.id != null));
onMounted(() => { store.dispatch("userSaved") })
console.log(userSavedData.value)
</script>
<style lang="css" scoped>
section {
  box-shadow: 0px 0px 3px 0px rgba(29, 58, 145, 0.43);
}
</style>
