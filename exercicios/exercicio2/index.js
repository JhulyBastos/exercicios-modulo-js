let livrosDisponiveis = [
  {
    id: 1,
    titulo: "livro 1",
    autor: "joao",
    quantidade: 10,
  },
  {
    id: 2,
    titulo: "livro 2",
    autor: "paulo",
    quantidade: 25,
  },
  {
    id: 3,
    titulo: "livro 3",
    autor: "andre",
    quantidade: 25,
  },
];

function adicionarLivroAoEstoque(id, titulo, autor, quantidade) {
  livrosDisponiveis.push({
    id,
    titulo,
    autor,
    quantidade,
  });
}
adicionarLivroAoEstoque(4, "livro 4", "caio", 17);
console.log(livrosDisponiveis);

function removerLivroDoEstoque(idDoDlivro) {
  const existeIdNoEstoque = !!livrosDisponiveis.find(
    (livro) => livro.id === idDoLivro
  );
  if (existeIdNoEstoque) {
    for (let indice = 0; indice < ivrosDisponiveis.length; indice++)
      if (livrosDisponiveis[indice].id === id.idDoDlivro) {
        console.log(`o livro de id${idDoLivro} foi removido`);
        livrosDisponiveis.splice(indice, 1);
        break;
      }
  } else console.log(`O livro de id ${idDoLivro} não foi encontrado`);
}

removerLivroDoEstoque(2);
console.log(livrosDisponiveis);

function quantidadeDeLivros(id, novaQuantidade) {
  const existeIdNoEstoque = !!livrosDisponiveis.find(
    (livro) => livro.id === idDoLivro
  );
  if (existeIdNoEstoque) {
    for (let livro of livrosDisponiveis) {
      if (livro.id === id) {
        livro.quantidade = novaQuantidade;
        console.log(
          `a quantidade do ${livro.titulo} foi atualizada para ${novaQuantidade} livros`
        );
      }
    }
  } else {
    console.log(`O id ${idDoDlivro} não foi localizado no estoque`);
  }
}
quantidadeDeLivros(2, 40);
console.log(livrosDisponiveis);

function listarLivros() {
  if (livrosDisponiveis.length === 0) {
    console.log("O estoque está vazio");
  } else {
    console.log(`O estoque possui ${estoque.length} títulos`);
    for (let livro of livrosDisponiveis) {
      console.log(`ID: ${livro.id}`);
      console.log(`Livro: ${livro.titulo}`);
      console.log(`Autor: ${livro.autor}`);
      console.log(`Quantidade: ${livro.quantidade}`);
    }
  }
}
listarLivros();

adicionarLivroAoEstoque(10, "livro 20", "Joana", 52);
adicionarLivroAoEstoque(89, "livro 85", "Ana", 12);

const listaNovosLivros = [
  { id: 10, titulo: "livro 20", autor: "Joana", quantidade: 52 },
  { id: 89, titulo: "livro 85", autor: "Ana", quantidade: 12 },
];

const adicionaDaLista = (listaNovos) => {
  for (let livro of listaNovos) {
    const { id, titulo, autor, quantidade } = livro;
    adicionaLivro(id, titulo, autor, quantidade);
  }
  console.log(`${listaNovos.length} livros adicionados`);
};
adicionaDaLista(listaNovosLivros);
console.log(livrosDisponiveis);

const executaEMostraLista = (acao, mostraLista) => {
  acao();
  mostraLista();
};

//executaEMostraLista(() => adicionarLivroAoEstoque(4, "livro 4", "caio", 17),() => listarLivros)

executaEMostraLista(
  () => adicionarLivroAoEstoque(4, "livro 4", "caio", 17),
  listarLivros
);
