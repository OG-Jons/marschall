<template>
  <div>
    <task-list :id="$route.params.id" />
  </div>
</template>

<script>
import TaskList from "../../components/playground/TaskList";
export default {
  name: "TaskListView",
  metaInfo: {
    title: "TaskList",
  },
  components: {
    TaskList,
  },
};
</script>
