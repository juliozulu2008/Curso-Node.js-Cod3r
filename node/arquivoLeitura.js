const fs = require('fs')


const caminho = '../node/arquivo.json'
// lendo arquiv de forma sincrona cuidados com aquivos grandes

const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf8', (err, conteudo) => { // como esta chamada utiliza callback ela sóretorna quando estiver pronto
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db) // no caso esta chamada pode ser executada 1º que a do callback

// lendo diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})