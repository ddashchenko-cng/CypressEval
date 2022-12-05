export class LoginPage {

    // Locators

    userNameInputLocator = '//input[@name="username"]'
    passwordInputLocator = '//input[@name="password"]'
    loginButtonLocator = '//button[@type="submit"]'

    // Functions

    enterUserName(userNameValue) {
        cy.xpath(this.userNameInputLocator).type(userNameValue)
    }

    enterPassword(passwordValue) {
        cy.xpath(this.passwordInputLocator).type(passwordValue)
    }

    clickLoginButton() {
        cy.xpath(this.loginButtonLocator).click()
    }

    // Methods
    
    login() {
        
    }

}