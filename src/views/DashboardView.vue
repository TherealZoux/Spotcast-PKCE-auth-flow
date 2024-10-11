<template>
  <main
    class="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:flex-row p-4 mt-[4rem]"
  >
    <ProfileComponent />
    <section
      class="m-4 flex gap-4 flex-col justify-between items-center p-4 bg-[#1a1a1a] rounded w-full"
    >
      <div class="w-full flex flex-row h-full flex-wrap relative">
        <h1
          class="text-[1.5rem] bg-[#121212] top-1 p-2 rounded roboto-bold absolute"
        >
          Following
        </h1>
        <FollowingComponent
          class="mt-[2rem] pt-8 shadow-[rgba(3,102,214,0.3)_0px_0px_0px_3px]"
        />
      </div>
      <section
        class="flex flex-col lg:flex-row gap-4 lg:gap-[5rem] justify-center w-full"
      >
        <div class="flex flex-col gap-4">
          <div class="relative">
            <h1
              class="text-[1.5rem] bg-[#121212] top-1 p-2 rounded roboto-bold absolute"
            >
              Top Shows
            </h1>
            <TopShowsComponent
              class="mt-[2rem] pt-8 shadow-[rgba(3,102,214,0.3)_0px_0px_0px_3px]"
            />
          </div>

          <div class="relative">
            <h1
              class="text-[1.5rem] bg-[#121212] top-1 p-2 rounded roboto-bold absolute"
            >
              Saved Episodes
            </h1>
            <UserSavedEbsComponent
              class="mt-[2rem] pt-8 shadow-[rgba(3,102,214,0.3)_0px_0px_0px_3px]"
            />
          </div>
        </div>
        <div class="w-full relative">
          <h1
            class="text-[1.5rem] bg-[#121212] top-1 p-2 rounded roboto-bold absolute"
          >
            Playlists
          </h1>
          <PlaylistsComponent
            class="mt-[2rem] pt-8 md-w-[30%] shadow-[rgba(3,102,214,0.3)_0px_0px_0px_3px]"
          />
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
//import FollowingComponent from '@/components/FollowingComponent.vue'

const store = useStore();
const loading = computed(() => store.getters.isLoading);
const saved = computed(() => store.getters.saved);
//console.log(saved);
onMounted(() => {
  store.dispatch("userProfile");
  store.dispatch("userSaved");
});
</script>

<style lang="scss" scoped></style>
