<template>
  <div>
    <div class="text-center">
      <v-btn class="text-none" color="primary" outlined @click="next">
        <v-img src="https://logopng.com.br/logos/google-37.png" width="24" class="mr-3" />
        {{ $vuetify.lang.t('$vuetify.auth.sign-in.google') }}
      </v-btn>
    </div>

    <br />

    <div class="d-flex text-center justify-space-between" style="display: flex;">
      <hr style="width: 42%; margin-top: 10px; border: 0.5px solid #ccc;">
      ou
      <hr style="width: 42%; margin-top: 10px; border: 0.5px solid #ccc;">
    </div>

    <br />

    <div class="text-left" style="height: 30px;">
      <span class="d-inline-block mb-8">{{ $vuetify.lang.t('$vuetify.auth.sign-in.subtitle') }}</span>
    </div>

    <v-form @submit.prevent="next">
      <v-text-field
        ref="input"
        v-model="identifier"
        class="mb-2"
        :label="$vuetify.lang.t('$vuetify.auth.sign-in.label')"
        name="login"
        type="text"
        hide-details="auto"
        outlined
        :disabled="disabled"
        :error-messages="error"
      />
    </v-form>

    <div class="text-body-2 text--secondary mb-8">
      {{ $vuetify.lang.t('$vuetify.auth.sign-in.private') }}
      <a
        href="#"
        class="d-inline-block text-none text-decoration-none font-weight-bold"
      >{{ $vuetify.lang.t('$vuetify.auth.sign-in.learn-more') }}</a>
    </div>
    <div class="d-flex justify-space-between">
      <v-btn
        class="text-none"
        style="min-width: 88px;"
        color="primary"
        depressed
        @click="next"
      >
        {{ $vuetify.lang.t('$vuetify.auth.sign-in.next') }}
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    error: null,
    disabled: false
  }),

  computed: {
    identifier: {
      get () {
        return this.$store.state.identifier
      },
      set (value) {
        this.$store.commit('updateIdentifier', value)
      }
    }
  },

  methods: {
    next () {
      if (!this.validEmail(this.identifier)) {
        this.error = 'Informe um email válido.'
        this.$refs.input.focus()
        return
      }

      this.error = null
      this.$emit('next', this.identifier)
      // this.$router.push({ name: 'password' })
    },

    validEmail (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
