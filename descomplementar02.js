// Cálculo de ICMS


//Função anônimo
var funcaoICMS = (precoCusto, precoBase) => {return ((precoCusto * precoBase)/100) + precoBase}
console.log("O valor total com IMCS é: R$ " + funcaoICMS(2, 20))

//Função: Arrow Function
var funcaoICMS = (precoCusto) => {
    var taxaICMS = 2 // Taxa do Rio de Janeiro
    return ((precoCusto * taxaICMS)/100) + precoCusto;
}

var precoCusto = prompt("Digite o preço de Custo:");
    precoCusto = Number(precoCusto);

var valorTotal = funcaoICMS(precoCusto);
    alert("O valor com ICMS é : R$ " + valorTotal)

// Função Declarativa
    function calcularICMS() {
      var precoCusto = Number(prompt("Digite o preço de custo do produto:"));
  
      var taxaICMS = 2;
      var valorICMS = (precoCusto * taxaICMS) / 100;  
      var precoFinal = precoCusto + valorICMS;
  
      alert("O valor do ICMS é: R$ " + precoFinal);
  }
  
  calcularICMS();
  