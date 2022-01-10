<template>
  <div v-if="ghProjects.length > 0">
    <h1>Github</h1>
    <transition-group name="fade" tag="div" id="github-projects">
      <a
        :href="project.html_url"
        target="_blank"
        class="card"
        v-for="project in ghProjects"
        :key="project.id"
      >
        <h2>{{ project.name }}</h2>
        <p>
          {{ project.description ? project.description : "No Description" }}
        </p>
      </a>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "GitHubProjects",
  data() {
    return {
      ghProjects: [],
    };
  },
  methods: {
    getGithubProjects() {
      this.axios
        .get(
          "https://api.github.com/users/OG-Jons/repos?sort=updated&per_page=6"
        )
        .then((response) => {
          response.data.forEach((project) => {
            this.ghProjects.push(project);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getGithubProjects();
  },
};
</script>
