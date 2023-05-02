

class PaginaRegistro {

    registrar(email, nome, senha, confirmarSenha) {

        cy.visit('https://bugbank.netlify.app/')

        // cy.get('.ihdmxA').click()

        cy.contains('button', 'Registrar')
            .click()

        // cy.get('.kOeYBn > .input__default').click  

        cy.get(':nth-child(2) > .input__default')
            .click({ force: true })
            .type(email)

        cy.get(':nth-child(3) > .input__default')
            .click({ force: true })
            .type(nome)

        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .click({ force: true })
            .type(senha)

        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .click({ force: true })
            .type(confirmarSenha)

        cy.get('#toggleAddBalance')
            .click({ force: true })

        cy.contains('button', 'Cadastrar')
            .click({ force: true })

    }
}

export default new PaginaRegistro()