const testData = {
    baseURL: "https://www.saucedemo.com",
    selectors: {
        userNameInput: '#user-name',
        passwordInput: '#password',
        errorMessageDiv: '.error-message-container.error',
        loginButton: "#login-button",
        cartLinkSelector: '.shopping_cart_link',
        menuButton: "#react-burger-menu-btn",
        logoutButton: '#logout_sidebar_link'
    },
    credentials: {
        userName: "standard_user",
        password: "secret_sauce"
    }
}

describe("Validate login functionality", () => {
    before(() => {
        cy.visit(testData.baseURL)
    })

    beforeEach(() => {
        cy.get(testData.selectors.userNameInput).type(testData.credentials.userName)
        cy.get(testData.selectors.passwordInput).type(testData.credentials.password)
        cy.get(testData.selectors.loginButton).click()
    })

    it("Validate Link", () => {
        cy.url().should('eq', `${baseURL}/inventory.html`)
    })

    it("Validate Add To Cart", () => {
        cy.get(testData.selectors.cartLinkSelector).click()
        cy.url().should('eq', `${baseURL}/cart.html`)
    })

    afterEach(() => {
        cy.get(testData.selectors.menuButton).click()
        cy.get(testData.selectors.logoutButton).click()
        cy.url().should('eq', baseURL)
    })
});
