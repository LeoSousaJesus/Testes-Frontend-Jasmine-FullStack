
describe('Funcao maioridade', function(){
    it('deve retornar "Maior idade" para idades maiores ou iguais a 18', function(){
        expect(maioridade(20)).toBe("Maior idade");
        expect(maioridade(18)).toBe("Maior idade");
    })
    it('deve retornar "Menor idade" para idades menores que 18', function(){
        expect(maioridade(17)).toBe("Menor idade");
        expect(maioridade(1)).toBe("Menor idade");
    })
    it('deve retornar "Idade inválida"para idades inválidas', function(){
        expect(maioridade(-1)).toBe("Idade inválida");
        expect(maioridade('texto')).toBe("Idade inválida");
    })
})