let pratoSelecionado = false;
let bebidaselecionado = false;
let sobremesaselecionado = false;

function selecionarPrato(elemento) {
  const pratoescolhido = document.querySelector(".caixa-prato .selecionado");
  const check = document.querySelector(
    ".caixa-prato .selecionado .price-box .checkmark"
  );

  if (pratoescolhido !== null) {
    pratoescolhido.classList.remove("selecionado");
  }
  elemento.classList.add("selecionado");

  pratoSelecionado = true;

  tudoSelecionado();
}
function selecionarBebida(elemento) {
  const pratoescolhido = document.querySelector(".caixa-bebida .selecionado");
  const check = document.querySelector(".caixa-bebida .checkmark");

  if (pratoescolhido !== null) {
    pratoescolhido.classList.remove("selecionado");
  }
  elemento.classList.add("selecionado");

  bebidaselecionado = true;

  tudoSelecionado();
}
function selecionarSobremesa(elemento) {
  const pratoescolhido = document.querySelector(
    ".caixa-sobremesa .selecionado"
  );
  const check = document.querySelector(".caixa-sobremesa .checkmark");

  if (pratoescolhido !== null) {
    pratoescolhido.classList.remove("selecionado");
  }
  elemento.classList.add("selecionado");

  sobremesaselecionado = true;

  tudoSelecionado();
}

function tudoSelecionado() {
  if (
    pratoSelecionado == true &&
    bebidaselecionado == true &&
    sobremesaselecionado == true
  ) {
    const caixaPedido = document.querySelector(".caixa-inferior-funcional");
    const caixainvisivel = document.querySelector(".caixa-inferior");
    caixainvisivel.classList.add("escondido");
    caixaPedido.classList.remove("escondido");
  }
}
function fazerPedido() {
  const divNomeDoPrato = document.querySelector(
    ".caixa-prato .selecionado .nome-produto "
  );
  const divPrecoDoPrato = document.querySelector(
    ".caixa-prato .selecionado .preco-produto "
  );
  const nomePratoSelecionado = divNomeDoPrato.innerHTML;
  const precoPratoSelecionado = divPrecoDoPrato.innerHTML
    .replace("R$ ", "")
    .replace(",", ".");

  const divNomeDaBebida = document.querySelector(
    ".caixa-bebida .selecionado .nome-produto "
  );
  const divPrecoDaBebida = document.querySelector(
    ".caixa-bebida .selecionado .preco-produto "
  );
  const nomeBebidaSelecionada = divNomeDaBebida.innerHTML;
  const precoBebidaSelecionada = divPrecoDaBebida.innerHTML
    .replace("R$ ", "")
    .replace(",", ".");

  const divNomeDaSobremesa = document.querySelector(
    ".caixa-sobremesa .selecionado .nome-produto "
  );
  const divPrecoDaSobremesa = document.querySelector(
    ".caixa-sobremesa .selecionado .preco-produto "
  );
  const nomeSobremesaSelecionada = divNomeDaSobremesa.innerHTML;
  const precoSobremesaSelecionada = divPrecoDaSobremesa.innerHTML
    .replace("R$ ", "")
    .replace(",", ".");
  const precoTotal =
    parseFloat(precoPratoSelecionado) +
    parseFloat(precoBebidaSelecionada) +
    parseFloat(precoSobremesaSelecionada);
  enviarMensagem(
    nomePratoSelecionado,
    nomeBebidaSelecionada,
    nomeSobremesaSelecionada,
    precoTotal
  );
}
function enviarMensagem(
  nomePratoSelecionado,
  nomeBebidaSelecionada,
  nomeSobremesaSelecionada,
  precoTotal
) {
  console.log(precoTotal.toFixed(2));

  let texto = `Olá, gostaria de fazer o pedido:
- Prato: ${nomePratoSelecionado}
- Bebida: ${nomeBebidaSelecionada}
- Sobremesa: ${nomeSobremesaSelecionada}
Total: R$ ${precoTotal.toFixed(2)}`;
  const textoCodificado = encodeURIComponent(texto);
  console.log(textoCodificado);
  const url = `https://wa.me/5542998323896?text=${textoCodificado}`;
  window.open(url);
}
