<template>
  <nav class="navbar">
    <div v-for="route in $router.options.routes" :key="route.name">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
