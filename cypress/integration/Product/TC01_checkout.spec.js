describe("ProductPage", function () {
    it('Navigate to Product Page', function () {
        cy.visit('https://www.amazon.co.uk/')

    })

    it('Search For A Product(Speaker)', function () {
        cy.get('input#twotabsearchtextbox').type('speaker')
        cy.wait(3000)
        cy.get('div.nav-search-submit.nav-sprite').click()
    })

    it('Add Product(Speaker) To Cart', function () {
        cy.wait(1000)
        cy.contains('LG XBOOM Go PL2 Bluetooth Speaker PL2.DGBRLLK').should('be.visible')
        .click()
        cy.get('input#add-to-cart-button').click()
        cy.get('#hlb-ptc-btn').click()
        //Enter your amazon email inside the empty quote
        cy.get('input#ap_email').type('')
        cy.get('#continue').click()
        //Enter your password inside the empty quote
        cy.get('input#ap_password').type('')
        cy.get('#signInSubmit').click()
        cy.wait(3000)
        cy.get('.a-button-input').click({ multiple: true, force: true })
        cy.wait(1000)
    })


})



