async function buscaEndereco(cep){
    var menssagemErro = document.getElementById('erro');

    menssagemErro.innerHTML = '';

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro){
            throw Error('CEP não existente!');
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var complemento = document.getElementById('complemento');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        complemento.value = consultaCEPConvertida.complemento;
        bairro.value = consultaCEPConvertida.bairro;

        console.log(consultaCEPConvertida);

        return consultaCEPConvertida;
    } catch (erro){
        menssagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));

// console.log(conjuntoCeps);

// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

// buscaEndereco();

// var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
//Exemplo de código muito complexo, callback hell!
                        // .then(resposta => resposta.json())
                        // .then(r => {
                        //     if(r.erro){
                        //         throw Error('Esse cep não existe!')
                        //     } else
                        //     console.log(r)
                        // })
                        // .catch(erro => {
                        //     console.log('Erro ao consultar o CEP:', erro.message);
                        //     // console.log(erro)
                        // })
                        // .finally(mensagem => console.log('Processamento concluído!'));

// console.log(consultaCEP);

// buscaEndereco();