/// <reference types="cypress" />

const loginPage = {
  url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  selectors: {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: ".oxd-button",
  },
  credentials: {
    username: "Admin",
    password: "admin123",
  },
};

describe("Validate login functionality", () => {
  it("validates login with valid credentials", () => {
    cy.visit(loginPage.url);

    cy.get(loginPage.selectors.usernameInput).type(
      loginPage.credentials.username
    );
    cy.get(loginPage.selectors.passwordInput).type(
      loginPage.credentials.password
    );
    cy.get(loginPage.selectors.loginButton).click();
  });
});
