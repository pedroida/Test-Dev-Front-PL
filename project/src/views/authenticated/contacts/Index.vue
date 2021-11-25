<template>
  <authenticated-container :full-width="isIndex" :content-class="isIndex ? 'h-100' : ''">

    <contacts-index v-if="isIndex" />

    <router-view></router-view>

  </authenticated-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthenticatedContainer from '@/components/layouts/Authenticated.vue'
import ContactsIndex from '@/components/contacts/Index.vue'

export default defineComponent({
  name: 'ContactsContainer',
  components: { AuthenticatedContainer, ContactsIndex },

  computed: {
    isIndex () {
      return this.$router.currentRoute.value.name === 'contacts'
    }
  }
})
</script>
