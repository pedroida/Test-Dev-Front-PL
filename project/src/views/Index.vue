<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Index',

  head () {
    return {
      scripts: [
        'https://cdn.jsdelivr.net/npm/bootstrap-grid-only@1.0.0/bootstrap.css'
      ]
    }
  },

  created () {
    if (!this.authorization) {
      return useRouter().replace({ name: 'login' })
    }

    if (this.authorization && ['login', 'root'].includes(this.$route.name as string)) {
      return useRouter().replace({ name: 'contacts' })
    }
  },

  watch: {
    authorization () {
      this.$router.replace({ name: !this.authorization ? 'login': 'contacts' })
    }
  },

  computed: {
    ...mapGetters('authentication', ['authorization'])
  }
})
</script>
<style lang="scss">
@import "./src/assets/scss/template";
</style>
