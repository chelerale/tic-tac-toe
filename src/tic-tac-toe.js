class TicTacToe {
    constructor() {

    this.symbol = 'x'
    this.mas = []
    for (let i = 0; i < 3; i++) {
      this.mas.push([null,null,null])
  }
}

    getCurrentPlayerSymbol() {
      return this.symbol
}

    nextTurn(rowIndex, columnIndex) {
        if(this.mas[rowIndex][columnIndex] === null){
            this.mas[rowIndex][columnIndex] =  this.symbol;
            this.symbol = (this.symbol == 'x') ? 'o' : 'x';
       }
  }

    isFinished() {
        return (this.getWinner() != null  || this.isDraw()  )
    }

    getWinner() {
      for (var i = 0; i < 3; i++) {
          if(this.mas[i][0] == this.mas[i][1] && this.mas[i][0] == this.mas[i][2]){
            return this.mas[i][0]
          }
          if(this.mas[0][i] == this.mas[1][i] &&  this.mas[1][i] == this.mas[2][i]){
              return this.mas[0][i]
            }
        }
      if(this.mas[0][0] == this.mas[1][1] && this.mas[1][1]== this.mas[2][2]){
          return this.mas[0][0]
        }
      if(this.mas[0][2] == this.mas[1][1] &&this.mas[1][1] == this.mas[2][0]){
        return this.mas[0][2]
      }
      return null
    }

    noMoreTurns() {
    for (var i = 0; i < 3; i++){
      for (var j = 0; j < 3; j++){
      if (this.mas[i][j] === null){
      return false
      }
    }
  }
      return true
    }

    isDraw() {
       return (this.getWinner() == null &&  this.noMoreTurns() )
    }
    getFieldValue(rowIndex, colIndex) {
return this.mas[rowIndex][colIndex];
       }
}
module.exports = TicTacToe;
