<template>
  <div class="task-view">
    <task-detail />
  </div>
</template>

<script>
export default {
  components: {
    TaskDetail: () => import('@/components/TaskDetail'),
  },
}
</script>

<style scoped>
.task-view {
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: #FFFFFF;
  margin: 5rem auto;
  padding: 1rem;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border-radius: 0.25rem;
  max-width: 700px;
}
</style>
