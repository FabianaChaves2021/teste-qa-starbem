

class PaginaLogin {

    logar(email, senha, nome) {

        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default')
            .click({ force: true })
            .type(email)

        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .click({ force: true })
            .type(senha)

        cy.contains('button', 'Acessar')
            .click({ force: true })

    }
}

export default new PaginaLogin()