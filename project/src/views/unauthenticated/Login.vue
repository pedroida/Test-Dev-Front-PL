<template>
  <unauthenticated-container>
    <div class="row w-100">
      <div class="col-md-6 d-md-flex d-none">
        <img src="/images/login.svg" alt="login" class="img-responsive login-image">
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="text-center">
          <h1>Bem-vindo!</h1>

          <p>Faça login para acessar nossa plataforma</p>

          <login-form class="mt-5 px-10" />
        </div>
      </div>
    </div>

    <loader v-if="loading" />
  </unauthenticated-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UnauthenticatedContainer from '../../components/layouts/Unauthenticated.vue'
import LoginForm from '@/components/login/Form.vue'
import Loader from '@/components/shared/Loader.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Login',

  components: { Loader, LoginForm, UnauthenticatedContainer },

  computed: {
    ...mapGetters('authentication', ['loading'])
  }
})
</script>

<style scoped>
.login-image {
  max-width: 540px;
  margin: auto;
}

@media screen and (min-width: 768px) {
  .px-10 {
    padding-left: 5em;
    padding-right: 5em;
  }
}
</style>
