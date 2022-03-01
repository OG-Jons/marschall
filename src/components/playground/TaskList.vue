<template>
  <div class="tasklist">
    <h1>Task List for: {{ id }}</h1>
    <ul>
      <li id="input-field">
        <form @submit.prevent="addTask" ref="newTaskInput">
          <input-field v-model="newTask" placeholder="Enter new task..." />
        </form>
      </li>
      <li class="tasklist-item" v-for="task in sortedTasks" :key="task.id">
        <task-item :task="task" @delete-task="deleteTask" />
      </li>
    </ul>
  </div>
</template>

<script>
import InputField from "../InputField";
import TaskItem from "./TaskItem";
import Vue from "vue";
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
          order: 1,
        },
        {
          id: 2,
          title: "Task 2",
          status: false,
          order: 2,
        },
        {
          id: 3,
          title: "Task 3",
          status: false,
          order: 3,
        },
      ],
    };
  },
  computed: {
    sortedTasks() {
      const newArray = [...this.tasks];
      return newArray.sort((a, b) => a.order - b.order);
    },
  },
  methods: {
    addTask() {
      this.tasks.push({
        id: this.tasks.length + 1,
        title: this.newTask,
        status: false,
        order: 4,
      });
      this.newTask = "";
      this.$refs.newTaskInput.reset();
    },
    updateTask(task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      Vue.set(this.tasks, index, task);
    },
    deleteTask(task) {
      if (confirm("Are you sure you want to delete this task?")) {
        this.tasks = this.tasks.filter((t) => t.id !== task);
      }
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
