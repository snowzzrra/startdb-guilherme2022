class Forca {
  constructor(palavra){
    this.palavra = palavra
    this.resultado = new Array(palavra.length).fill("_")
    this.letrasChutadas = []
    this.vidas = 6
    this.estado = "aguardando chute"
  }

  chutar(letra) {
    letra = letra.toLowerCase()

    if (!/^[a-z]{1}$/.test(letra)) { return console.log("O seu chute não é válido.") }

    if (this.letrasChutadas.includes(letra)) { return console.log("Essa letra já foi chutada!") }

    this.letrasChutadas.push(letra)

    if (this.palavra.includes(letra)){
      this.resultado.forEach((e, index) => letra == this.palavra.charAt(index) ? this.resultado[index] = letra : "")
    } else {
      this.vidas--
      this.vidas == 0 ? this.estado = "perdeu" : "" 

      return console.log("Letra errada!")
    }

    this.resultado.join("") == this.palavra ? this.estado = "ganhou" : ""
  }

  buscarEstado() { return this.estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.resultado // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
