<template>
  <div class="wrap">
    <div :style="{height: this.fieldSize+'px', width: this.fieldSize+'px'}" class="game__field">
      <div
        v-for="(puzle, index) in puzleItems"
        :key="`row-${index}`"
        :class="{'game__field__item__null' : puzle.puzleNumber === 0}"
        :style="{top: puzle.getPositionCoords().top + 'px', left: puzle.getPositionCoords().left + 'px', height: puzle.getHeigth()+'px', width: puzle.getWidth()+'px'}"
        class="game__field__item"
        @click="puzleClick(puzle)"
      >
        {{ puzle.puzleNumber }}
      </div>
    </div>
  </div>
</template>
<script>
import Field from '@/models/field'
import Vue from 'vue'
import Puzle from '@/models/puzle'

export default Vue.extend({
  data: () => ({
    fieldModel: {},
    puzleItems: [],
    fieldSize: 400
  }),
  mounted () {
    this.fieldModel = new Field()
    this.updateField()
  },

  methods: {
    puzleClick (puzle) {
      const target = this.puzleItems.find(item => item.puzleNumber === 0)
      if (this.hasMove(puzle, target)) {
        this.fieldModel.swapIndex(puzle, target)
        const tempPuzle = { ...target }
        target.row = puzle.row
        target.col = puzle.col
        puzle.row = tempPuzle.row
        puzle.col = tempPuzle.col
        ++this.fieldModel.steps
        this.$emit('onVictory', this.isVictory())
        this.$emit('onStepIncrement')
      }
    },
    hasMove (puzle, target) {
      if ((Math.abs((puzle.row + puzle.col) - (target.row + target.col)) === 1) && Math.abs(puzle.row - target.row) <= 1 && Math.abs(puzle.col - target.col) <= 1) {
        return true
      }
      return false
    },
    isVictory () {
      if (this.fieldModel.gameField.flat().join('') === '1234567891011121314150') {
        return true
      }
      return false
    },
    updateField () {
      let i = 0
      this.fieldModel.gameField.forEach((item) => {
        item.forEach(
          (el) => {
            this.puzleItems.push(new Puzle({
              fieldSize: this.fieldSize,
              puzlePosition: i++,
              puzleNumber: el
            }))
          }
        )
      })
    }

  }

})
</script>
<style lang="scss">

.game__field {
  background-color: whitesmoke;
  border: 1px solid black;
  box-shadow: 3px 5px 8px black;
  display: flex;
  position: relative;

  &__item {
    background-color: #1d1dc7;
    position: absolute;
    border: 1px solid #7070bd;
    transition: all ease 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    color: white;
    user-select: none;

    &__null {
      visibility: hidden;
    }
  }
}
</style>
