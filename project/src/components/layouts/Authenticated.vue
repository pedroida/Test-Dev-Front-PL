<template>
  <div class="authenticated-container">
    <div class="authenticated-header px-3 px-md-5">
      <div v-show="!isIndex" class="d-flex align-items-center pointer" @click="backToList">
        <img src="@/assets/images/icons/arrow-left.svg" alt="back icon" class="mr-2">
        <span>Voltar</span>
      </div>

      <span @click="logout" class="align-self-flex-end logout pointer">Sair</span>
    </div>
    <div class="authenticated-content pt-4 px-5 pb-4 d-flex justify-content-center" :class="contentClass">
      <div class="authenticated-content-card p-3 p-md-4 w-100" :class="fullWidth ? 'w-md-100' : 'w-md-60'">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'AuthenticatedContainer',

  props: {
    fullWidth: {
      type: Boolean,
      required: false,
      default: () => true
    },

    contentClass: {
      type: String,
      required: false,
      default: () => ''
    }
  },

  setup () {
    const store = useStore()
    const toast = useToast()
    const router = useRouter()

    const logout = () => {
      store.dispatch('authentication/requestLogout')
        .catch(() => {
          toast.error('Houve um problema ao sair')
        })
    }

    const backToList = () => {
      router.replace({ name: 'contacts' })
    }

    return {
      backToList,
      logout
    }
  },

  computed: {
    isIndex () {
      return this.$router.currentRoute.value.name === 'contacts'
    }
  }
})
</script>

<style scoped lang="scss">
.authenticated-container {
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;

  .authenticated-header {
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 5em;
    background: #ffffff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.03);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .authenticated-content {
    padding-top: 7em !important;

    .authenticated-content-card {
      border-radius: 8px;
      background-color: #ffffff;
    }
  }

  .logout {
    transition-duration: .2s;

    &:hover {
      transition-duration: .2s;
      color: #c90a0a !important;
    }
  }
}
</style>
