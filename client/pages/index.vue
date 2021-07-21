<template>
  <div>
    <Tutorial />
    <button @click="add">{{ count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    return {
      count,
      add,
    }
  },
})
</script>
