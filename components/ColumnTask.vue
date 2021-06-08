<template>
  <div
    class="task"
    draggable
    @dragover.prevent
    @dragenter.prevent
    @dragstart="pickUpTask($event, taskIndex, columnIndex)"
    @click="goToTask(task.id)"
    @drop.stop="moveTask($event, column.tasks, columnIndex, taskIndex)"
  >
    <span class="task-text-style">
      {{ task.name }}
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    column: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('board', ['moveTaskOrColumn']),
    goToTask(id) {
      this.$router.push({ name: 'index-task-id', params: { id } })
    },
    pickUpTask(event, taskIndex, fromColumnIndex) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.dropEffect = 'move'

      event.dataTransfer.setData('from-task-index', taskIndex)
      event.dataTransfer.setData('from-column-index', fromColumnIndex)
      event.dataTransfer.setData('type', 'task')
    },
    moveTask(event, toTasks, toColumnIndex, toTaskIndex) {
      this.moveTaskOrColumn({ event, toTasks, toColumnIndex, toTaskIndex })
    },
  },
}
</script>

<style scoped>
.task {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: #FFFFFF;
  color: rgba(55, 65, 81, 1);
  text-decoration: none;
}

.task-text-style {
  width: 100%;
  font-weight: bold;
}
</style>
