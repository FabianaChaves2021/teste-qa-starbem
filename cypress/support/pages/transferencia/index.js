

class PaginaTransferencia {

    transferencia() {

        cy.get('#btn-TRANSFERÊNCIA')
            .click({ force: true })

        cy.get(':nth-child(1) > .input__default')
            .type('520')

        cy.get('.account__data > :nth-child(2) > .input__default')
            .type('2')

        cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default')
            .type('200')

        cy.get(':nth-child(3) > .input__default')
            .type('Transferência para usuário 2')

        cy.get('.style__ContainerButton-sc-1wsixal-0')
            .click({ force: true })


    }
}

export default new PaginaTransferencia()
