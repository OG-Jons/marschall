<template>
  <div>
    <h1>Urban Dictionary Search Engine</h1>
    <!--    <input type="text" v-model="searchQuery" />-->
    <InputField v-model="searchQuery" />
    <div v-if="results.length > 0">
      <h1>Results</h1>
      <div id="github-projects">
        <div class="card" v-for="result in results" :key="result.defid">
          <h2>{{ result.word }}</h2>
          <div id="description">
            <p v-if="!result.readMoreDescription">
              {{ result.definition | spliceTextTo100 }}
              <br />
              <a
                @click="
                  result.readMoreDescription = !result.readMoreDescription
                "
                v-if="result.definition.length > 100"
              >
                Read more</a
              >
            </p>
            <p v-else-if="result.readMoreDescription">
              {{ result.definition }}
            </p>
          </div>
          <br />
          <div id="example">
            <span>Example: </span>
            <p v-if="!result.readMoreExample">
              {{ result.example | spliceTextTo100 }}
              <br />
              <a
                @click="result.readMoreExample = !result.readMoreExample"
                v-if="result.example.length > 100"
              >
                Read more</a
              >
            </p>
            <p v-else-if="result.readMoreExample">{{ result.example }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "../InputField";
export default {
  name: "Dictionary",
  components: { InputField },
  metaInfo: {
    title: "Urban Dictionary Search Engine",
  },
  data() {
    return {
      searchQuery: "",
      results: [],
      idleTimer: null,
    };
  },
  methods: {
    search() {
      this.axios
        .get("urban-dictionary", {
          params: {
            term: this.searchQuery,
          },
        })
        .then((response) => {
          this.results = [];
          this.results = response.data.map((item) => {
            return {
              ...item,
              readMoreDescription: false,
              readMoreExample: false,
            };
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    searchIfIdle() {
      // Function that checks if the searchQuery is empty and if it isn't, wait for 2 seconds before executing autoComplete
      if (this.searchQuery !== "") {
        clearTimeout(this.idleTimer);
        this.idleTimer = setTimeout(this.search, 200);
      } else {
        clearTimeout(this.idleTimer);
        this.results = [];
      }
    },
  },
  filters: {
    spliceTextTo100(text) {
      return text.length > 100 ? `${text.substring(0, 100)}...` : text;
    },
  },
  watch: {
    searchQuery: function () {
      this.searchIfIdle();
    },
  },
};
</script>

<style scoped lang="scss">
a {
  color: #696969;
  cursor: pointer;

  &:hover {
    color: #9e9e9e;
  }
}

input {
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px;
  width: 40%;
}
</style>
