<template>
  <div>
    <div class="text-center mb-4">
      <span class="text-h6 text--secondary">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/eagle-mkt.appspot.com/o/Eagle%20Mkt%20-%20Logotipo.png?alt=media&token=b7052351-f794-432f-84b2-73d951e68c2d"
          alt="Vuetify Logo"
          width="24"
          style="vertical-align: middle;"
          class="mr-1"
        >
        <span class="font-family-body">Eagle Mkt</span>
      </span>
    </div>
    <div class="transition-wrapper">
      <transition :name="transitionName">
        <router-view @next="$emit('next', $event)" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    transitionName: 'slide-left'
  }),

  watch: {
    $route (to) {
      this.transitionName = (to.name === 'password') ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style lang="scss">
.transition-wrapper{
  position: relative;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

.slide-left-enter, .slide-right-leave-to {
  transform: translateX(500px);
}

.slide-left-leave-to, .slide-right-enter {
  transform: translateX(-500px);
}
</style>
