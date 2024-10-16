<template>
  <section
    class="flex items-center justify-center bg-[#141414] p-4 rounded-2xl"
  >
    <ul class="w-full flex flex-wrap gap-4 w-full" v-if="shows.length > 0">
      <showComponent
        v-for="show in shows"
        :showImg="show.album.images[2].url"
        :showName="show.name"
        :showArtist="show.artists[0].name"
        :showUrl="show.external_urls.spotify"
      />
    </ul>
    <div
      class="bg-[#1a1a1a] w-[20rem] p-4 rounded text-[#8c8c8c] mr-20 "
      v-else
    >
      <p>Your top shows will appear here</p>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted} from "vue";
import { useStore } from "vuex";

const store = useStore();
const shows = computed(() => store.getters.topShows);

onMounted(() => {store.dispatch("fetchTopShows")})
</script>
