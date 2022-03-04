<template>
  <div>
    <div class="task-item">
      <div class="task-item__title">
        <div class="task-item__title-draggable">
          <unicon name="draggabledots" fill="#FFF" />
        </div>

        <input
          type="checkbox"
          class="task-item__title-status"
          :checked="task.status"
        />
        <span class="task-item__title-text">{{ task.title }}</span>
      </div>
      <div class="task-item__actions">
        <button class="task-item__action" @click="editTask">
          <unicon name="pen" fill="#FFFFFF68" hover-fill="white" />
        </button>
        <button class="task-item__action" @click="deleteTask">
          <unicon name="trash" fill="#FFFFFF68" hover-fill="white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    editTask() {
      this.isEditing = true;
    },
    saveTask() {
      this.isEditing = false;
    },
    deleteTask() {
      this.$emit("delete-task", this.task.id);
    },
  },
};
</script>

<style lang="scss">
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #5d2c68;
  padding: 2rem 1.5rem;

  .task-item__title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-between;

    .task-item__title-status {
      width: 1.7rem;
      height: 1.7rem;
      border: 2px solid #5d2c68;
      border-radius: 50%;
      margin-right: 1rem;
    }

    .task-item__title-text {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
}

.task-item__action {
  cursor: pointer;
  background: transparent;
  border: none;
}

.task-item__title-draggable {
  cursor: grab;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
