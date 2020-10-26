<template>
  <div class="wrap">
    <GameField @onStepIncrement="fifteen.steps++" @onVictory="onVictory" />
    <div class="info_panel">
      <span class="steps">{{ fifteen.steps }}</span>
      <span v-if="fifteen.victory" class="victory">Ура, победа</span>
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
      console.log(data)
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

  .info_panel {
    font-size: 20px;
    margin-left: 30px;
    padding: 20px;
  }
}
</style>
