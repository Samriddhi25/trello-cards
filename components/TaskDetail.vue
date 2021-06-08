<template>
  <div class="task-block">
    <div class="task-title">
       <input
        :value="task.name"
        type="text"
        class="edit-task-name"
        @change="updateTaskProperty('name', $event)"
      />
    </div>
    <div class="desc-box">
      <span>
        📙 Enter Description
      </span>
      <textarea
        :value="task.description"
        class="desc-content"
        @change="updateTaskProperty('description', $event)"
      >
      </textarea>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters('board', ['getTask']),
    task() {
      return this.getTask(this.$route.params.id)
    },
  },
  methods: {
    ...mapMutations('board', ['UPDATE_TASK']),
    updateTaskProperty(key, event) {
      this.UPDATE_TASK({
        task: this.task,
        key,
        value: event.target.value,
      })
    },
  },
}
</script>

<style scoped>

.task-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.25rem;
  border-radius: 0.25rem;
  flex-grow: 1;
  background-color: rgb(229, 199, 160);
}

.task-list {
  overflow-y: auto;
}

.edit-task-name {
  padding: 0.5rem;
  flex-grow: 1;
  margin-right: 0.5rem;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
}

.task-title {
  display: flex;
  width: 100%;
  font-size: 22px;
  align-items: center;
  margin-bottom: 1rem;
}

.desc-box {
  width: 100%;
}

.desc-content {
  padding: 0.5rem 1rem ;
  margin-top: 0.5rem;
  height: 16rem;
  border-style: none;
  line-height: 1.5;
  width: 100%;
  border-radius: 0.25rem;
  background-color: rgb(215, 220, 228);
  resize: none;
}
</style>
