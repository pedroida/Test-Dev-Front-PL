<template>
  <div class="d-flex justify-content-flex-start">
    <div class="item-action pointer d-flex align-items-center" @click="$emit('edit')">
      <img src="@/assets/images/icons/edit.svg" alt="edit icon" class="mr-2">
      Editar
    </div>
    <div class="item-action pointer d-flex align-items-center" @click="$emit('delete')">
      <img src="@/assets/images/icons/trash.svg" alt="delete icon" class="mr-2">
      Excluir
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableItemActions',

  emits: ['edit', 'delete']
})
</script>

<style scoped lang="scss">
.item-action {
  font-weight: 400;
  padding: .5em;
  border-radius: 8px;
  transition-duration: .2s;

  &:hover {
    transition-duration: .2s;
    box-shadow: 2px 4px 20px 0px #0000004d;
  }
}
</style>
