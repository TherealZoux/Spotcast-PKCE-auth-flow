<template>
  <v-app>
    <v-main class="flex flex-col justify-between">
      <HeaderComponent />
      <router-view> </router-view>
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script setup>
//import HeaderComponent from "@/components/HeaderComponent.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style scoped>
a {
  text-decoration: none;
}

p {
  font-size: 22px;
}

span {
  color: rgb(133, 133, 133);
}

* {
  font-family: "Roboto", sans-serif;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
