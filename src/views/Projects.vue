<template>
  <div>
    <git-hub-projects />
  </div>
</template>

<script>
import GitHubProjects from "@/components/Projects/GitHubProjects.vue";

export default {
  name: "Projects",
  components: { GitHubProjects },
};
</script>
