import Product from '../PageObjects/CheckoutPage'


describe("ProductPage", function () {

    const product = new Product()

    it('Navigate to Product Page', function () {
        product.visit()
        cy.wait(3000)
        
        

    })

    it('Search For A Product(Speaker)', function () {
        product.searchbutton()
        cy.wait(3000)
        product.searchClick()
  
    })


    it('Add Product(Speaker) To Cart', function () {
        cy.wait(3000)
        product.clickProduct()
        product.clickProductAdd()
        product.clickProductAddButton()
        product.enterEmail()
        product.clickContinue()
        product.enterPassword()
        product.clickSubmitButton()
        product.clickCheckOut()
    })





})