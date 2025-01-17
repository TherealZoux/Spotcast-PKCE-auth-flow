<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import img from '../assets/logo.png'
const store = useStore();
const shows = computed(() => store.getters.followingShows);
const loading = computed(() => store.getters.isLoading);

onMounted(() => { store.dispatch("getFollowingShows") })
</script>

<template>
  <section class="flex items-center justify-center bg-[#141414] gap-4 p-4 rounded-2xl">
    <ul class="flex flex-wrap gap-4 w-full" v-if="shows">
      <showComponent v-for="show in shows" :showName="show.show.name" :showImg="show?.show.images[0]?.url || img"
        :showArtist="show.show.publisher" :showUrl="show.show.external_urls.spotify" />
    </ul>
    <div class="bg-[#1a1a1a] w-[20rem] p-4 rounded text-[#8c8c8c]" v-else>
      <p>Your playlists will appear here</p>
    </div>
  </section>
</template>
