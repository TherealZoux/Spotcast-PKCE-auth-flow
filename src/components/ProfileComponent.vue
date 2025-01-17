<template>
  <div class="max-w-xs" v-if="user">
    <div class="bg-[#121212] shadow-xl rounded-lg py-3">
      <div class="photo-wrapper p-2">
        <img class="w-32 h-32 rounded-full mx-auto" v-if="!user.images || user.images.length === 0"
          src="https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000" alt="Default user image" />
        <img class="w-32 h-32 rounded-full mx-auto" v-else :src="user.images[0]?.url" alt="User profile image" />
      </div>
      <div class="p-2">
        <h3 class="text-center text-xl font-medium leading-8">
          {{ user.display_name }}
        </h3>
        <div class="text-center text-gray-400 text-xs font-semibold">
          <p>User</p>
        </div>
        <table class="text-xs my-3 mt-6">
          <tbody>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td class="px-2 py-2 user-info-field">{{ user.email }}</td>
            </tr>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">Country</td>
              <td class="px-2 py-2 user-info-field">{{ user.country }}</td>
            </tr>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">Id</td>
              <td class="px-2 py-2 user-info-field">{{ user.id }}</td>
            </tr>
            <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">
                Subscription
              </td>
              <td class="px-2 py-2 user-info-field">{{ user.product }}</td>
            </tr>
          </tbody>
        </table>
        <div class="text-center my-3">
          <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
            :href="user.external_urls.spotify" v-if="user.id">View Profile</a>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-center text-gray-500">User not found.</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const user = computed(() => store.getters.profile);
</script>

<style lang="css">
.user-info-field {
  background: #1a1a1a;
  color: #8c8c8c;
  width: 80%
}

table,
th,
td {
  border: 6px solid #121212;
  border-collapse: collapse;
}
</style>
