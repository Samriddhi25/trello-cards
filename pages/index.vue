<template>
  <div class="board">
    <div class="inner">
      <board-column
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        :column="column"
        :column-index="$columnIndex"
        :board="board"
      />
      <div class="column">
        <input
          type="text"
          class="input-style"
          placeholder="+ Create new column"
          @keyup.enter="createColumn($event)"
        />
      </div>
    </div>
    <div v-if="isTaskOpen" class="task-bg" @click.self="closeTask">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    BoardColumn: () => import('@/components/BoardColumn'),
  },
  computed: {
    ...mapState('board', ['board']),
    isTaskOpen() {
      return this.$route.name === 'index-task-id'
    },
  },
  mounted() {
    this.GET_USER_BOARD()
  },
  methods: {
    ...mapMutations('board', ['GET_USER_BOARD', 'CREATE_COLUMN']),
    closeTask() {
      this.$router.push({ name: 'index' })
    },
    createColumn(event) {
      this.CREATE_COLUMN({
        name: event.target.value,
      })
      event.target.value = ''
    },
  },
}
</script>

<style lang="css">
.board {
  padding: 1rem;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: burlywood;
}

.task-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.column {
  background-color: rgb(229, 199, 160);
  display: flex;
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

.inner {
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: flex-start;
}

.input-style {
  display: block;
  padding: 0.5rem;
  width: 100%;
  background-color: transparent;
}
</style>