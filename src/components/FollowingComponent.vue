<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const artists = computed(() => store.getters.artists);
const loading = computed(() => store.getters.isLoading);

onMounted(() => {
  store.dispatch("getFollowing");
});
</script>

<template>
  <loadingComponent v-if="loading" />
  <section
    class="w-full flex max-h-[12rem] overflowww-hiddden flex-wrap items-center justify-center bg-[#121212] gap-4 p-4 rounded-2xl"
    v-else
  >
    <a
      v-for="artist in artists"
      :href="artist.external_urls.spotify"
      v-if="artists.length"
    >
      <img
        :src="artist.images[0].url"
        class="rounded-[50%] w-[4rem] h-[4rem]"
      />
    </a>
    <h1 v-if="!artists.length" class="text-[#8c8c8c] mb-4">You are not following any Artist</h1>
  </section>
</template>
