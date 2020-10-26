export default class Puzle {
  fieldSize;
  puzleNumber;
  puzlePosition;
  row;
  col;
  constructor ({ fieldSize, puzlePosition, puzleNumber }) {
    this.fieldSize = fieldSize
    this.puzlePosition = puzlePosition
    this.puzleNumber = puzleNumber
    this.row = Math.floor(this.puzlePosition / 4)
    this.col = this.getColumnStart()
  }

  getRow () {
    return this.row
  }

  getColumn () {
    return this.col
  }

  getColumnStart () {
    let temp = this.puzlePosition
    const i = 0
    while (temp >= 4) {
      temp -= 4
    }
    return Math.floor(temp)
  }

  getWidth () {
    return this.fieldSize / 4
  }

  getHeigth () {
    return this.fieldSize / 4
  }

  getPositionCoords () {
    return {
      top: this.getRow() * this.getHeigth(),
      left: this.getColumn() * this.getWidth()
    }
  }
}
