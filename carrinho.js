
window.onload = function () {
    const campoCEP = document.getElementById('cep');

    campoCEP.addEventListener('blur', function () {
        const caixaCEP = campoCEP.value;

        if (caixaCEP.length === 8) {
            const url = `https://viacep.com.br/ws/${caixaCEP}/json`;

            fetch(url)
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error('Erro ao buscar o CEP. Verifique sua conexão ou tente outro CEP.');
                    }
                    return response.json();
                })
                .then(function (data) {
                    if (data.erro) {
                        alert('CEP não encontrado. Verifique e tente novamente.');
                    } else {
                        alert('CEP encontrado!');
                        document.getElementById('txt-rua').value = data.logradouro || '';
                        document.getElementById('txt-bairro').value = data.bairro || '';
                        document.getElementById('txt-cidade').value = data.localidade || '';
                    }
                })
                .catch(function (error) {
                    console.error('Erro na requisição:', error);
                    alert('Não foi possível buscar as informações do CEP.');
                });
        } else {
            alert('Por favor, insira um CEP válido com 8 dígitos.');
        }
    });

    const cartItem = JSON.parse(localStorage.getItem('cartItem'));

    if (cartItem) {
        const cartContainer = document.getElementById('cart-items');

        const cartElement =
            `<div class="col-md-4">
                        <div class="card">
                            <img src="${cartItem.img}" class="card-img-top" alt="${cartItem.nome}">
                            <div class="card-body">
                                <h5 class="card-title">${cartItem.nome}</h5>
                                <p class="card-text">${cartItem.descricao}</p>
                                <h6>Valor: ${cartItem.preco}</h6>
                            </div>
                        </div>    
                    </div>`;

        cartContainer.innerHTML = cartElement;

        document.getElementById('payment-section').style.display = 'block';
        document.getElementById('checkout-compra').style.display = 'inline-block';
    } else {
        document.getElementById('cart-items').innerHTML = '<p>Seu Carrinho está vazio.</p>';
    }
};


function finalizarCompra() {
    let numCartao = document.getElementById('num-cartao').value;
    let dataValidade = document.getElementById('data-validade').value;
    let cvv = document.getElementById('cvv').value;
    let cep = document.getElementById('cep').value;
    let numCep = document.getElementById('num').value;

    if (numCartao && dataValidade && cvv && cep && numCep) {
        alert('Compra finalizada com sucesso!');
        window.location.href = 'inicio.html';
    } else {
        alert('Preencha todos os campos na seção de forma de pagamento!');
    }
}