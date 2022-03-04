<template>
  <div v-if="!$route.path.includes('/tasklist')">
    <nav class="navbar" v-if="isPlayground">
      <div v-for="route in portfolioRoutes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </div>
    </nav>
    <nav class="navbar" v-else>
      <div v-for="route in playgroundRoutes" :key="route.name">
        <router-link :to="route.path">{{ route.name }} </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    portfolioRoutes() {
      return this.$router.options.routes.filter(
        (route) =>
          !route.path.includes("playground") && !route.path.includes("task")
      );
    },
    playgroundRoutes() {
      return this.$router.options.routes.filter((route) =>
        route.path.includes("playground")
      );
    },
    isPlayground() {
      return !this.$route.path.includes("playground");
    },
  },
};
</script>
