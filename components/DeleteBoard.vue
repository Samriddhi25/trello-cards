<template>
  <div class="box">
      <div
        v-for="(item, i) in menuItems"
        :key="i"
        class="menu-icon"
        @click="item.method(columnIndex)"
      >
        🗑️
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    columnIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      menuItems: [
        {
          text: 'Delete',
          method: this.deleteColumn,
        },
      ],
    }
  },
  methods: {
    ...mapMutations('board', ['DELETE_COLUMN']),
    deleteColumn(columnIndex) {
      this.DELETE_COLUMN(columnIndex)
    },
  },
}
</script>

<style scoped>
.box {
  position: relative;
}

.menu-icon {
  opacity: 50;
  cursor: pointer;
  margin-right: 0.5rem;
}

</style>