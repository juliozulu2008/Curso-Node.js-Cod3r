const moduloA = require('../../moduloA')


console.log(moduloA.ola)

const saudacao = require('saudacao')

console.log(saudacao.ola)

const http = require('http') // criando um server com node 
http.createServer((req, res) => {
    res.write('Bom dia! julio')
    res.end()
}).listen(8080)