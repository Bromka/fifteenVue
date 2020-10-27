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
  }

  getRow () {
    return this.row
  }

  setRow (row) {
    this.row = row
  }

  setCol (col) {
    this.col = col
  }

  getColumn () {
    return this.col
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
