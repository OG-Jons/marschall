<template>
  <div>
    <h1>tasklist vue</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from "../../components/playground/TaskList";
export default {
  name: "TaskList",
  components: {
    TaskList,
  },
};
</script>
