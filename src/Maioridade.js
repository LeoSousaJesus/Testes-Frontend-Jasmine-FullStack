
const maioridade = function (idade){
  if (idade >= 18) {
        return "Maior de idade";
  } else if (idade < 18 && idade > 1) {
        return "Menor de idade";
  } else {
        return "Idade inválida";
  }
}