<template>
  <v-parallax
    src="https://www.nsgarder.dk/wp-content/uploads/2018/09/167-black-leather-2560x1600-minimalistic-wallpaper.jpg"
    style="height: 100%;"
  >
    <v-container
      class="fill-height justify-center"
      fluid
    >
      <login-card
        :loading="loading"
        :disabled="disabled"
      >
        <router-view @next="onNext" />
      </login-card>
    </v-container>
  </v-parallax>
</template>

<script>
import LoginCard from '@/components/LoginCard/LoginCard'

export default {

  components: { LoginCard },
  data: () => ({
    loading: false,
    disabled: false
  }),

  methods: {
    onNext (data) {
      this.loading = true
      this.disabled = true
      setTimeout(() => {
        this.loading = false
        this.disabled = false
        this.$router.push({ name: 'password' })
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  .letter-spacing-0 {
    letter-spacing: 0 !important;
  }

  .text-decoration-none {
    text-decoration: none !important;
  }

  .v-parallax__image-container > img {
    transform: scale(2) !important;
  }
</style>
