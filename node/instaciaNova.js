// uma factory retona um novo opbeto

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}
