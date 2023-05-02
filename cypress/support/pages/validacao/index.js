

class PaginaValidacao {

    registro() {

        cy.get('div[class*=ContainerInformations] p')
            .should('be.visible')
            .should('contains.text', 'foi criada com sucesso')

        cy.contains('#btnCloseModal', 'Fechar')
            .click()
    }

    login(nome) {

        cy.get('#textName')
            .should('have.text', 'Olá ' + nome + ',')


    }

    transferencia() {

        cy.get('div[class*=styles__ContainerInformations] p')
            .should('have.text', 'Conta inválida ou inexistente')

        cy.contains('#btnCloseModal', 'Fechar')
            .click()

        cy.get('#btnBack')
            .click()

        cy.get('.home__ContainerLink-sc-1auj767-2')
            .click()

    }

}

export default new PaginaValidacao()