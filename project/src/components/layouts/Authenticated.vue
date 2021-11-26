<template>
  <div class="authenticated-container">
    <div class="authenticated-header px-3 px-md-5">
      <div>
        <div class="align-items-center pointer" :class="!isIndex ? 'd-flex' : 'd-none'" @click="backToList">
          <img src="@/assets/images/icons/arrow-left.svg" alt="back icon" class="mr-2">
          <span>Voltar</span>
        </div>
      </div>

      <span @click="logout" class="align-self-flex-end logout pointer">Sair</span>
    </div>
    <div class="authenticated-content px-md-5 px-3 pb-4 d-flex justify-content-center" :class="contentClass">
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
@media screen and (max-width: 768px){
  .forms-content {
    height: auto;
    padding-top: 17em !important;
  }
}
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
    overflow: auto;
    padding-top: 7em;

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
