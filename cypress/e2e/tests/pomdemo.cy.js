import { LoginPage } from "../pages/LoginPage"

const loginPage = new LoginPage()

describe('All Log In Tests', function () {

    it('Login Test 1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginPage.enterUserName('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLoginButton()
        cy.get('.oxd-userdropdown-name').click()

    })

    it('Login Test 2', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginPage.enterUserName('WrongAdmin')
        loginPage.enterPassword('admin123')
        loginPage.clickLoginButton()
        cy.get('.oxd-userdropdown-name').click()

    })

})
