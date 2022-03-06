<template>
  <div>
    <nav class="navbar" v-if="isPortfolio">
      <div v-for="route in portfolioRoutes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </div>
    </nav>
    <div v-else>
      <SidebarMenu :menu="menu"></SidebarMenu>
    </div>
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";

export default {
  name: "Navbar",
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Playground navigation",
          hiddenOnCollapse: true,
        },
        {
          href: { path: "/playground" },
          title: "Playground",
          icon: "fa fa-bell",
        },
        {
          href: { path: "/tasklist" },
          title: "Tasklist",
          icon: "fa fa-check",
        },
        {
          title: "M152",
          icon: "fa fa-star",
          child: [
            {
              href: { path: "/playground/css-animations" },
              title: "CSS Animations",
            },
            {
              href: { path: "/playground/svg-stuff" },
              title: "SVG's",
            },
          ],
        },
        {
          title: "PokeDex",
          href: { path: "/playground/pokedex" },
          icon: "fa fa-radiation",
        },
        {
          title: "Urban Dictionary",
          href: { path: "/playground/urban" },
          icon: "fa fa-book",
        },
      ],
    };
  },
  components: {
    SidebarMenu,
  },
  computed: {
    portfolioRoutes() {
      return this.$router.options.routes.slice(0, 3);
    },
    isPortfolio() {
      const routes = this.$router.options.routes.slice(0, 3);
      return routes.some((route) => this.$route.path === route.path);
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
