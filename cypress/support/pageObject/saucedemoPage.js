class saucedemoPage {
    username = '#user-name'
    password = '#password'
    login_btn = '#login-button'
    error_msg = '[data-test="error"]'
    title  = '[data-test="title"]'
    backpack = '[data-test="add-to-cart-sauce-labs-backpack"]'
    cart = '[data-test="shopping-cart-link"]'
    removeBackpack = '[data-test="remove-sauce-labs-backpack"]'

    clickLogin(){
        cy.get(this.login_btn).click()
    }

    addBackpack(){
        cy.get(this.backpack).click()
    }

    verifyCart(cartValue){
        cy.get(this.cart).should('contain.text',cartValue)
    }
}
module.exports = new saucedemoPage()