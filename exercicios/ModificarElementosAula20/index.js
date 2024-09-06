const SelecionaTag = (elemento) => document.getElementsByTagName(elemento);

const SelecionaId = (elemento) => document.getElementById(elemento);

const SelecionaClasse = (elemento) => document.getElementsByClassName(elemento);

const SelecionaNome = (elemento) => document.getElementsByName(elemento);

const tituloH1 = SelecionaTag("h1");

tituloH1[0].innerText = "Mudou titulo";

console.log(tituloH1[0].classList);

//Documentação DOM
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
//https://developer.mozilla.org/en-US/docs/Web/API/Element
