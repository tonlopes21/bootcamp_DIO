function calculadora() {
    const operacao = prompt('Escolha a operação:\n 1- soma(+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)');
    console.log(operacao);

    //quando coloca "!operação" irá verificar se é diferente do tipo número.
    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida!');
        calculadora();
    }

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
    }
    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
    }
    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
    }
    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
    }
    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao();
    }
    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não')
        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert('Até mais!')

        } else {
            alert('Digite uma opção válida!')
            novaOperacao();
        }
    }
    if (operacao == 1) {
        soma();
    }
    if (operacao == 2) {
        subtracao();
    }
    if (operacao == 3) {
        multiplicacao();
    }
    if (operacao == 4) {
        divisaoReal();
    }
    if (operacao == 5) {
        divisaoInteira();
    }
    if (operacao == 6) {
        potenciacao();
    }
    // Ao invés de utilizar vários if's, pode utilizar o switch case.



}


calculadora();