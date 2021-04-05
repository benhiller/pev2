<template>
  <main-layout is-plan :has-shared="hasShared" @share="handleShare">
  <plan v-if="planSource" :plan-source="planSource" :plan-query="planQuery" ref="plan"></plan>
  </main-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import copy from 'clipboard-copy';
import Plan from '@/components/Plan.vue';
import MainLayout from '../layouts/Main.vue';

import { planData } from '../main';

@Component({
  components: {
    MainLayout,
    Plan,
  },
  methods: {
    handleShare: function() {
      copy(window.location.href);
      this.hasShared = true;
    }
  }
})
export default class App extends Vue {
  private planSource: any | any[] = planData[0];
  private planQuery: string = planData[1];
  private hasShared: boolean = false;
}
</script>
