<template>
  <div class="tasklist">
    <h1>Task List for: {{ id }}</h1>
    <ul>
      <li id="input-field">
        <form @submit.prevent="addTask" ref="newTaskInput">
          <input-field v-model="newTask" placeholder="Enter new task..." />
        </form>
      </li>
      <li class="tasklist-item" v-for="task in tasks" :key="task.id">
        <task-item :task="task" />
      </li>
    </ul>
  </div>
</template>

<script>
import InputField from "../InputField";
import TaskItem from "./TaskItem";
export default {
  name: "TaskList",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    InputField,
    TaskItem,
  },
  data() {
    return {
      newTask: "",
      tasks: [
        {
          id: 1,
          title: "Task 1",
          status: true,
        },
        {
          id: 2,
          title: "Task 2",
          status: false,
        },
        {
          id: 3,
          title: "Task 3",
          status: false,
        },
      ],
    };
  },
  methods: {
    addTask() {
      this.newTask = "";
      this.$refs.newTaskInput.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.tasklist {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tasklist-item {
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  width: 80%;
}

#input-field {
  width: 100%;
}
</style>
