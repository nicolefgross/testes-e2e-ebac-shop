/// <reference types="cypress" />

import DadosCheckout from "../support/page_objects/DadosCheckout";
import dadosCheckoutPage from '../fixtures/checkout.json'

describe('Funcionalidade fluxo de pedido', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Deve navegar pela loja da EBAC Shop', () => {
        cy.adicionandoProdutos('L', 'Black', '4')
        cy.get('.woocommerce-message').should('contain', '4 × “Bruno Compete Hoodie” foram adicionados no seu carrinho.')

        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        cy.get('a > .hidden-xs').should('contain', 'Welcome')

        DadosCheckout.checkoutpage(
            dadosCheckoutPage[1].nome,
            dadosCheckoutPage[1].sobrenome,
            dadosCheckoutPage[1].empresa,
            dadosCheckoutPage[1].país,
            dadosCheckoutPage[1].endereco,
            dadosCheckoutPage[1].numero,
            dadosCheckoutPage[1].cidade,
            dadosCheckoutPage[1].estado,
            dadosCheckoutPage[1].cep,
            dadosCheckoutPage[1].telefone,
            dadosCheckoutPage[1].email,
        )
        cy.get('[type="checkbox"]').check()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });

});
