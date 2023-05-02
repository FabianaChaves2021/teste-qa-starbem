/// <reference types= "cypress" />


import paginaRegistro from '../support/pages/registro'
import paginaLogin from '../support/pages/login'
import paginaValidacao from '../support/pages/validacao'
import paginaTransferencia from '../support/pages/transferencia'

describe('transferencia', () => {
    it('realizando uma transferencia', () => {

        const usuario = {

            // Massa de dados extraída do site:https://ethereal.email/
            email: 'duane23@ethereal.email',
            nome: 'Duane Kovacek',
            senha: '45F2ebKq8Dhs66kYwx',
            confirmar_senha: '45F2ebKq8Dhs66kYwx'

        }

        paginaRegistro.registrar(usuario.email, usuario.nome, usuario.senha, usuario.confirmar_senha)

        paginaValidacao.registro()

        paginaLogin.logar(usuario.email, usuario.senha, usuario.nome)

        paginaValidacao.login(usuario.nome)

        paginaTransferencia.transferencia()
        
        paginaValidacao.transferencia()




        // cy.get('#textName')
        // .should('have.text', 'Olá Teste de Entrevista,')

        // cy.get('div[class*=ContainerInformations] p')
        //    .should('be.visible')
        //    .should('contains.text', 'foi criada com sucesso')

        // cy.contains('#btnCloseModal', 'Fechar')
        //    .click()


    })
})