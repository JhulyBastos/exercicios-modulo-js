const SelecionaTag = (elemento) => document.getElementsByTagName(elemento);

const SelecionaId = (elemento) => document.getElementById(elemento);

const SelecionaClasse = (elemento) => document.getElementsByClassName(elemento);

const SelecionaNome = (elemento) => document.getElementsByName(elemento);

const tituloH1 = SelecionaTag("h1");

tituloH1[0].innerText = "Mudou titulo";
