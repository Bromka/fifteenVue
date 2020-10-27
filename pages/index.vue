<template>
  <div class="wrap">
    <GameField @onStepIncrement="fifteen.steps++" @onVictory="onVictory" :size="400" />
    <div class="info_panel">
      <div class="steps">{{ fifteen.steps }}</div>
      <div v-if="fifteen.victory" class="victory">Ура, победа!!!</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GameField from '@/components/game/GameField.vue'

export default Vue.extend({
  components: {
    GameField
  },
  data: () => ({
    fifteen: {
      steps: '',
      victory: false
    }
  }),
  methods: {
    onVictory (data) {
      this.fifteen.victory = data
    }
  }

})
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

.wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  .info_panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    padding: 20px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
