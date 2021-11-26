<template>
  <authenticated-container :full-width="isIndex" :content-class="isIndex ? 'h-100' : 'forms-content'">

    <contacts-index v-if="isIndex" />

    <router-view></router-view>

    <loader v-if="loading" />
  </authenticated-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Loader from '@/components/shared/Loader.vue'
import AuthenticatedContainer from '@/components/layouts/Authenticated.vue'
import ContactsIndex from '@/components/contacts/Index.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'ContactsContainer',
  components: { AuthenticatedContainer, ContactsIndex, Loader },

  computed: {
    ...mapGetters('contacts', ['loading']),
    isIndex () {
      return this.$router.currentRoute.value.name === 'contacts'
    }
  }
})
</script>
