class ValidarEmail {

    static validacaoEmail(email) {
        var re = /\S+@\S+\.\S+/
        return re.test(email)
    }
}
