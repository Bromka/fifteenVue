export default class Field {
  static instanceCount = 0
  gameField = []
  steps = 0;

  constructor () {
    Field.instanceCount++
    if (Field.instanceCount > 1) {
      throw new Error(`Класс Field не может быть вызван более 1 раза. Сейчас ${Field.instanceCount}`)
    }

    this.setStartValues()
  }

  setStartValues () {
    this.setStartSteps()
    this.setStartFieldArray()
  }

  setStartSteps () {
    this.steps = 0
  }

  setStartFieldArray () {
    const tempField = new Array(16).fill('').map((_, i) => i).sort(() =>
      Math.random() - 0.5
    )
    const fieldArray = []
    let index = 0
    for (let i = 0; i < 4; i++) {
      const rowArray = []
      for (let j = 0; j < 4; j++) {
        rowArray[j] = tempField[index++]
      }
      fieldArray.push(rowArray)
    }
    this.gameField = fieldArray
  }

  swapIndex (target, item) {
    // хз почему не работает [a, b] = [b, a]
    console.log(this.gameField, 1)

    const a = this.gameField[target.row][target.col]
    const b = this.gameField[item.row][item.col]
    this.gameField[item.row][item.col] = a
    this.gameField[target.row][target.col] = b

    console.log(this.gameField, 2)
  }
}
