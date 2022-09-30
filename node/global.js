//console.log(global)
//personalizando atributos global

global.MinhaApp = { // nesse caso estou criando em global um objeto  MinhaAPP
    saudacao() { // Criei uma funcão dentro do objeto global que foi crido
        return 'Olá'
    },
    nome: 'Sistema Feito por Julio' // criado um atributo dentro do ojs criado em global
}
// tomar cuida  nao fazer isso 