/// <reference types= "cypress" />

import paginaRegistro from '../support/pages/registro'
import paginaValidacao from '../support/pages/validacao'

describe('registro', () => {
  it('registro de novo usuário', () => {
    const usuario = {

      // Massa de dados extraída do site:https://ethereal.email/
      email: 'duane23@ethereal.email',
      nome: 'Duane Kovacek',
      senha: '45F2ebKq8Dhs66kYwx',
      confirmar_senha: '45F2ebKq8Dhs66kYwx'
  }
    
  paginaRegistro.registrar(usuario.email, usuario.nome, usuario.senha, usuario.confirmar_senha)

  paginaValidacao.registro()

  })
})
