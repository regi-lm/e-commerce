
// Array
let produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7990,
        precoOriginal: 8990,
        desconto: 10,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400" ,
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8990,
        precoOriginal: 10999,
        desconto: 18,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" ,
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1890,
        precoOriginal: 2299,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400" ,
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5490,
        precoOriginal: 6299,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400" ,
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3290,
        precoOriginal: 3799,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400" ,
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 490,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" ,
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "headphones",
        preco: 2490,
        precoOriginal: 2999,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400" ,
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7990,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400" ,
        descricao: "Notebook Windows premium"
    }
];

let containerProdutos = document.querySelector(".produtos-container");
let inputPesquisa = document.querySelector(".input-pesquisa");
let textoInput = "";
let todosBotoes = document.querySelectorAll(".botao-categorias");
let categoria = "todos";

function mostrarProdutos() {
    let htmlProdutos = ""

    // Pegar item por item do array de forma automática
    // Possibilidade de escolher o que fazer com cada item
    produtos.forEach(prod => {

        // if (se) -> Tomar decisões
        // toLocaleLowerCase() -> Coloca o texto da verificação tudo em minúsculo
        // includes() -> Verifica se dois textos "batem"
        // prod.nome -> MacBook Air -> Includes(input) -> Mac

        if(prod.nome.toLocaleLowerCase().includes(textoInput.toLocaleLowerCase())){

            // = -> Colocando um valor dentro da variável
            // == ou === -> Comparando dois valores
            // || -> Ou

            if(prod.categoria === categoria || categoria === "todos") {

        // Colocar o produto na tela
        htmlProdutos = htmlProdutos + `
                        <div class="cartao-produto">
                            <img src="${prod.imagem}" class="imagem-produto">
                            <div class="info-produto">
                                <h3 class="nome-produto">${prod.nome}</h3>
                                <p class="descricao-produto">${prod.descricao}</p>
                                <p class="preco-produto">R$ ${prod.preco},00</p>
                                <button class="botao-produto">Ver Detalhes</button>
                            </div>
                        </div>
                    `
            }
        }
    })

    //innerHTML = coloca o que eu quiser no HTML
    containerProdutos.innerHTML = htmlProdutos

}

mostrarProdutos()

function pesquisar() {
    textoInput = inputPesquisa.value

    mostrarProdutos()
}

inputPesquisa.addEventListener("input", pesquisar)

todosBotoes.forEach(botao => {
    botao.addEventListener("click", function(){

        // getAttribute -> Permite que eu pegue o valor do "data-categoria" no HTML
        categoria = botao.getAttribute("data-categoria")

        todosBotoes.forEach(b => b.classList.remove("ativo"))

        botao.classList.add("ativo")

        mostrarProdutos()
    })
})