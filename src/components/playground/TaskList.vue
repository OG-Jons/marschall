<template>
  <div class="tasklist">
    <ul>
      <li><input-field></input-field></li>
    </ul>
  </div>
</template>

<script>
import InputField from "../InputField";
export default {
  name: "TaskList",
  components: {
    InputField,
  },
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTask() {},
  },
};
</script>
