describe('Função maioridade', function() {

    it('deve retornar "Maior idade" para idades maiores ou iguais a 18', function() {

        expect(maioridade(20)).toBe('Maior idade');  // Verifica se a idade 20 retorna "Maior idade"

        expect(maioridade(18)).toBe('Maior idade');  // Verifica se a idade 18 retorna "Maior idade"

    });
 
    it('deve retornar "Menor idade" para idades menores que 18', function() {

        expect(maioridade(17)).toBe('Menor idade');   // Verifica se a idade 17 retorna "Menor idade"

        expect(maioridade(0)).toBe('Menor idade');    // Verifica se a idade 0 retorna "Menor idade"

    });
 
    it('deve retornar "Idade inválida" para idades inválidas', function() {

        expect(maioridade(-1)).toBe('Idade inválida'); // Verifica se idade negativa retorna "Idade inválida"

        expect(maioridade('texto')).toBe('Idade inválida'); // Verifica se entrada não numérica retorna "Idade inválida"

    });

});
 
    // Testes para operações de soma

    it('deve somar dois números corretamente', function() {

        expect(soma(1, 2)).toBe(3);  // Verifica se a soma de 1 + 2 é igual a 3

        expect(soma(9, 9)).toBe(18); // Verifica se a soma de 9 + 9 é igual a 18

    });
 
    // Testes para operações de subtração

    it('deve subtrair dois números corretamente', function() {

        expect(subtracao(5, 2)).toBe(3);    // Verifica se a subtração de 5 - 2 é igual a 3

        expect(subtracao(14, 9)).toBe(5);   // Verifica se a subtração de 14 - 9 é igual a 5

    });
 
    // Testes para operações de multiplicação

    it('deve multiplicar dois números corretamente', function() {

        expect(multiplicacao(3, 4)).toBe(12);   // Verifica se a multiplicação de 3 * 4 é igual a 12

        expect(multiplicacao(7, 2)).toBe(14);   // Verifica se a multiplicação de 7 * 2 é igual a 14

    });
 
    // Testes para operações de divisão

    it('deve dividir dois números corretamente', function() {

        expect(divisao(10, 2)).toBe(5);    // Verifica se a divisão de 10 / 2 é igual a 5

        expect(divisao(15, 3)).toBe(5);    // Verifica se a divisão de 15 / 3 é igual a 5

    });
 
 