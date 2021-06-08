<template>
  <div
    class="column"
    draggable
    @drop="moveColumn($event, column.tasks, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="pickUpColumn($event, columnIndex)"
  >
    <div class="board-style">
      <div>
      {{ column.name }} <span>{{ column.tasks.length }}</span>
      </div>
      <delete-board :column-index="columnIndex" />
    </div>
    <div class="task-list">
      <column-task
        v-for="(task, $taskIndex) of column.tasks"
        :key="$taskIndex"
        :task="task"
        :task-index="$taskIndex"
        :column-index="columnIndex"
        :column="column"
        :board="board"
      />
    </div>
    <input
      type="text"
      class="task-style"
      placeholder="+ Enter new task"
      @keyup.enter="createTask(column.tasks, $event)"
    />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  components: {
    ColumnTask: () => import('./ColumnTask'),
    DeleteBoard: () => import('./DeleteBoard'),
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    board: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('board', ['moveTaskOrColumn']),
    ...mapMutations('board', ['CREATE_TASK']),
    createTask(tasks, event) {
      this.CREATE_TASK({
        tasks,
        name: event.target.value,
      })
      event.target.value = ''
    },
    pickUpColumn(event, fromColumnIndex) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.dropEffect = 'move'

      event.dataTransfer.setData('from-column-index', fromColumnIndex)
      event.dataTransfer.setData('type', 'column')
    },
    moveColumn(event, toTasks, toColumnIndex, toTaskIndex) {
      this.moveTaskOrColumn({ event, toTasks, toColumnIndex, toTaskIndex })
    },
  },
}
</script>

<style scoped>
.column {
  background-color: rgb(229, 199, 160);
  padding: 0.5rem;
  margin-right: 1rem;
  text-align: left;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border-radius: 0.25rem;
  overflow: hidden;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 300px;
}

.board-style {
  display: flex;
  align-content: center;
  margin-bottom: 0.5rem;
  font-weight: bold;
  justify-content: space-between;
}

.task-style {
  display: block;
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
}

span {
  color: dimgrey;
  opacity: 0.5;
  margin: 0 5px;

}
</style>