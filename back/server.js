const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
const products = require('./src/data/products.json');

app.use(cors())

// sempre que abrir o endereço raiz '/'
app.get('/', (req, res) => {
  // ele retorna a lista de filmes em formato 'json'
  return res.json(products)
})

// server escutando na porta ... e retornando uma confirmação para o console :D
app.listen(port, () => console.log(`Escutando no endereço: http://localhost:${port}`));
