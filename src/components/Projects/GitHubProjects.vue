<template>
  <div id="github-projects" v-if="ghProjects.length > 0">
    <transition-group name="fade" tag="ul">
      <div
        :class="`card div${idx}`"
        v-for="(project, idx) in ghProjects"
        :key="project.id"
      >
        <a :href="project.html_url" target="_blank">
          <h1>{{ project.name }}</h1>
          <p>
            {{
              project.description
                ? project.description
                : "No DescriptionDescriptionDescriptionDescriptionDescription"
            }}
          </p>
        </a>
      </div>
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
          "https://api.github.com/users/OG-Jons/repos?sort=updated&per_page=5"
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
