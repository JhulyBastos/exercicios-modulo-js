const elementoPorTagName = document.getElementsByTagName("header");
console.log(elementoPorTagName);

const elementoPorId = document.getElementById("secao-principal");
console.log(elementoPorId.innerText);

const elementoPorClasse = document.getElementsByClassName("paragrafo");
console.log(elementoPorClasse[0].innerText);

const elementoPorNome = document.getElementsByName("meu-botao");
console.log(elementoPorNome[0].innerText);

const verificaSeExisteTag = (elemento) =>
  !!document.getElementsByTagName(elemento).length > 0;

const verificaSeExisteId = (elemento) => !!document.getElementById(elemento);

const verificaSeExisteClasseName = (elemento) =>
  !!document.getElementsByClassName(elemento).length > 0;

const verificaSeExisteName = (elemento) =>
  !!document.getElementsByName(elemento).length > 0;

/*console.log(verificaSeExisteTag("main"));
console.log(verificaSeExisteId("meu-botao"));
console.log(verificaSeExisteClasseName("paragrafo"));
console.log(verificaSeExisteName("meu-botao"));
*/

const listaDeElementos = ["header", "ul", "meu-botao", "titulo-principal"];

const descobreTipoDoElemento = (lista) => {
  if (listaDeElementos.length === 0) {
    console.log("você não passou uma lista de elementos");
  } else {
    for (let nome of lista) {
      if (verificaSeExisteTag(nome)) console.log(`${nome} é uma tag`);
      else if (verificaSeExisteId(nome)) console.log(`${nome} é um id`);
      else if (verificaSeExisteClasseName(nome))
        console.log(`${nome} é uma classe`);
      else if (verificaSeExisteName(nome)) console.log(`${nome} é um nome`);
      else console.log(`${nome} não está no DOM`);
    }
  }
};

descobreTipoDoElemento(listaDeElementos);
