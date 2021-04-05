<template>
  <div class="d-flex flex-column vh-100">
    <div class="btn-container">
      <div class="navbar container flex-shrink-0">
        Postgres Explain Visualizer
        <button v-if="isPlan && hasShared" class="btn btn-primary ml-auto" disabled>Copied to Clipboard</button>
        <button v-if="isPlan && !hasShared" class="btn btn-primary ml-auto" v-on:click="share">Share</button>
        <v-link v-if="isPlan || isAbout" :class="{'btn btn-secondary': true, 'ml-auto': isAbout}" to="/">New Plan</v-link>
        <v-link :class="{'btn btn-link': true, 'ml-auto': !isPlan && !isAbout}" to="/about">About</v-link>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'
  export default {
    components: {
      VLink
    }, props: {
      isPlan: Boolean,
      isAbout: Boolean,
      hasShared: Boolean
    },
    methods: {
      share: function (event) {
        this.$emit('share');
      }
    },
  }
</script>

<style lang="scss">
@import '../assets/scss/main';
</style>
