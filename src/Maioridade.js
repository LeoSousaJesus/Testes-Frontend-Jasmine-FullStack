const maioridade = function(idade) {
    if (idade >= 18) {
        return "Maior idade";
    } else if (idade < 18 && idade >= 0) {
        return "Menor idade";
    } else {
        return "Idade inválida";
    }
}