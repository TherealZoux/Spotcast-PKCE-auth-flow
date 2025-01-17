<template>
  <section class="flex items-center justify-center bg-[#141414] p-4 rounded-2xl">
    <ul class="w-full flex flex-wrap gap-4 w-full" v-if="saved.total > 0">
      <showComponent v-for="i in saved.items" :showImg="i.episode.images[0].url" :showName="i.episode.name"
        :showArtist="i.episode.show.name" :showUrl="i.episode.external_urls.spotify" />
    </ul>
    <div class="bg-[#1a1a1a] w-[20rem] p-4 rounded text-[#8c8c8c] mr-20 " v-else>
      <p>Your saved episodes will appear here</p>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const saved = computed(() => store.getters.saved);
onMounted(() => { store.dispatch("userSaved") })
</script>
