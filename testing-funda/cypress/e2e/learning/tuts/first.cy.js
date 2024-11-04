/// <reference types="cypress" />
import loginPage from "../../../testData/loginPage";

const sidebarItemLeaveSelector = ':nth-child(3) > .oxd-main-menu-item'

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

    cy.get(sidebarItemLeaveSelector).click()
    cy.get('.oxd-topbar-body').find('ul li a').contains('Apply').click()
  });
});
