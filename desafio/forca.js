class Forca {
  constructor(palavra){
    this.palavra = palavra
    this.resultado = new Array(palavra.length).fill("_")
    this.letrasChutadas = []
    this.vidas = 6
    this.estado = "aguardando chute"
  }

  chutar(letra) {
    // A fazer: regex para verificar tamanho e se é letra.
    if (letra.length < 1 || letra.length > 1){
      return console.log("O seu chute deve conter uma única letra!")
    }

    if (this.letrasChutadas.includes(letra)){
      return console.log("Essa letra já foi chutada!")
    }

    if (this.palavra.includes(letra)){
      this.resultado.forEach((element, index) => {
        if (letra == this.palavra.charAt(index)){
          this.resultado[index] = letra
        }
      })

      this.letrasChutadas.push(letra)
    } else{
      this.letrasChutadas.push(letra)
      this.vidas--
      if (this.vidas == 0){
        this.estado = "perdeu"
      }
      return console.log("Letra errada!")
    }

    if (this.resultado.join("") == this.palavra){
      this.estado = "ganhou"
    }
  }

  buscarEstado() { return this.estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.resultado.join("") // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
