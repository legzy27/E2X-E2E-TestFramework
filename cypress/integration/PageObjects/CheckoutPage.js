class CheckoutPage {
    visit(){
       return cy.visit('https://www.amazon.co.uk/')
    }
    searchitem(){

    }
     searchbutton(){
       return   cy.get('input#twotabsearchtextbox').type('speaker')
     }
     searchClick(){

       return cy.get('div.nav-search-submit.nav-sprite').click()

     }

     clickProduct(){
      return  cy.contains('LG XBOOM Go PL2 Bluetooth Speaker PL2.DGBRLLK').should('be.visible').click()

     }
     clickProductAdd(){
         return cy.get('input#add-to-cart-button').click()

     }

     clickProductAddButton(){
      return  cy.get('#hlb-ptc-btn').click()

     }
     //input your email inside the empty quote
      enterEmail(){
          return cy.get('input#ap_email').type('')

      }
      clickContinue(){
          return cy.get('#continue').click()
      }
      //input your password inside the empty quote
      enterPassword(){
       return cy.get('input#ap_password').type('')

      }
     clickSubmitButton(){
       return cy.get('#signInSubmit').click()

     }
     clickCheckOut(){
      return cy.get('.a-button-input').click({ multiple: true, force: true })

     }

}

export default CheckoutPage

