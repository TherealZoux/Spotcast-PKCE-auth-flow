<template>
  <LoadingComponent v-if="loading" class="m-auto" />

  <main class="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:flex-row p-4 mt-[4rem]"
    v-else>
    <ProfileComponent />
    <section class="m-4 flex gap-4 flex-col justify-between items-center p-4 rounded w-full">
      <div class="w-full flex flex-row h-full flex-wrap relative">
        <h1
          class="text-[1.5rem] bg-[#1a1a1a] top-1 p-2 rounded roboto-bold relative w-full border-l-2 border-[#3498db]">
          Following
        </h1>
        <FollowingComponent class="mt-[1rem] pt-8" />
      </div>
      <section class="flex flex-col lg:flex-row gap-4 lg:gap-[1rem] justify-center w-full">
        <div class="flex flex-col gap-4">
          <div class="relative">
            <h1 class="text-[1.5rem] bg-[#1a1a1a] top-1 p-2 rounded roboto-bold relative border-l-2 border-[#3498db]">
              Top Shows
            </h1>
            <TopShowsComponent class="mt-[1rem] pt-8" />
          </div>

          <div class="relative">
            <h1 class="text-[1.5rem] bg-[#1a1a1a] top-1 p-2 rounded roboto-bold relative border-l-2 border-[#3498db]">
              Saved Episodes
            </h1>
            <UserSavedEbsComponent class="mt-[1rem] pt-8" />
          </div>
        </div>
        <div class="flex flex-col gap-4 w-[16rem]">
          <div class="w-full relative">
            <h1 class="text-[1.5rem] bg-[#1a1a1a] top-1 p-2 rounded roboto-bold relative border-l-2 border-[#3498db]">
              Playlists
            </h1>
            <PlaylistsComponent class="mt-[1rem] pt-8 md-w-[30%]" />
          </div>
          <div class="w-full relative">
            <h1 class="text-[1.5rem] bg-[#1a1a1a] top-1 p-2 rounded roboto-bold relative border-l-2 border-[#3498db]">
              following shows
            </h1>
            <followingShowsComponent class="mt-[1rem] pt-8 md-w-[30%]" />
          </div>

        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";

const store = useStore();
const loading = ref(true);
const saved = computed(() => store.getters.saved);
onMounted(() => {
  store.dispatch("userProfile");
  store.dispatch("userSaved");
  setTimeout(() => {
    loading.value = false;
  }, 2000);
});
</script>

<style lang="css" scoped>
main {
  background: url('../assets/dashboard.svg');
}
</style>
