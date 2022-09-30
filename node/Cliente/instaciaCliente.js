const contatorA = require('../instaciaUnica')
const contadorB = require('../instaciaUnica')

const contadorC = require('../instaciaNova')()// como estou invocando a funçao factory tenho que passar a chamada da funcao
const contadorD = require('../instaciaNova')()

contatorA.inc()
contatorA.inc()
console.log(contatorA.valor, contadorB.valor)// como faz cahe o valor foi 3

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //neste caso nao se fez cache 1 pois sao novas instacias feitas por uma factory