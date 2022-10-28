
async function getContext() {
  try {
    // Aguardando (await) uma 'resposta' do servidor que esta gritando no endereço: localhost e porta: 3001.
    const resposta = await fetch('http://localhost:3001/')

    // Aguardando os dados e convertendo-os do formato json() para um objeto js chamado 'dados'.
    const dados = await resposta.json()

    // Passando os o objeto 'dados' para a função show()
    show(dados)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
getContext()

// Função que faz um loop por todos os objetos e para cada um deles monta uma listagem coerênte em html
function show(itens) {
  let output = ''

  for( let item of itens ) {
    
    output += ` 
      <div id=${item.id} class='filme'>
        <h3>${item.nome}</h3>
        <img src=${item.foto} />
        <p>Descrição: ${item.descricao}</p>
        <p>Elenco: ${item.elenco}</p>
      </div>
    `}
  document.getElementById('container').innerHTML = output
}

