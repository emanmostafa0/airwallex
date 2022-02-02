/* eslint-disable testing-library/await-async-utils */

import {errorMessages} from '../../src/helpers/validations';


describe("Visit the homepage, and it is successfully rendered", () => {
  it("1. check if the homePage is rendered", () => {
    cy.visit("http://localhost:3000/"); 
    cy.wait(1000);
    cy.get('[data-testid="header"]').should("be.visible");
    cy.get('[data-testid="footer"]').should("be.visible");
    cy.contains('A better way to enjoy every day');
 
  });

  it("2. should render HomeLayout with click on invite button to show RequestInvite dialog", () => {
    cy.visit("http://localhost:3000/"); 
    cy.wait(1000);
   
    cy.get('[data-testid="button"]').click();
    cy.get('[data-testid="form-title"]').should("be.visible");
  });

  it("3. invalid form data dialog", () => {
    cy.visit("http://localhost:3000/"); 
    cy.wait(1000);
   
    cy.get('[data-testid="button"]').click();
    cy.get('[data-testid="form-title"]').should("be.visible");
    cy.get('input[name="fname"]').type(`e`);
    cy.get('input[name="email"]').type(`eed.test`);
    cy.get('input[name="confirm-email"]').type(`eed.test`);
    cy.get('[data-testid="button"]').eq(1).click();

    cy.contains(errorMessages['fName']);
    cy.contains(errorMessages['email']);
    cy.contains(errorMessages['confirmEmail']);
  });

  it("4. valid form data dialog", () => {
    cy.visit("http://localhost:3000/"); 
    cy.wait(1000);
   
    cy.get('[data-testid="button"]').click();
    cy.get('[data-testid="form-title"]').should("be.visible");
    cy.get('input[name="fname"]').type(`eman`);
    cy.get('input[name="email"]').type(`eed@e.test`);
    cy.get('input[name="confirm-email"]').type(`eed@e.test`);
    cy.get('[data-testid="button"]').eq(1).click();
    cy.wait(10000);

    cy.get('[data-testid="success-title"]').should("be.visible");
  });

  it("5. usedEmail with errorMessage data dialog", () => {
    cy.visit("http://localhost:3000/"); 
    cy.wait(1000);
   
    cy.get('[data-testid="button"]').click();
    cy.get('[data-testid="form-title"]').should("be.visible");
    cy.get('input[name="fname"]').type(`eman`);
    cy.get('input[name="email"]').type(`usedemail@airwallex.com`);
    cy.get('input[name="confirm-email"]').type(`usedemail@airwallex.com`);
    cy.get('[data-testid="button"]').eq(1).click();
    cy.wait(10000);
    
    cy.get('[data-testid="errorSubmit"]').should("be.visible");
  });

  it("6. click outside to close the dialog", () => {
    cy.visit("http://localhost:3000/"); 
    cy.wait(1000);
   
    cy.get('[data-testid="button"]').click();
    cy.get('[data-testid="form-title"]').should("be.visible");
    cy.wait(2000);
    cy.get('body').click(0,0);
    cy.get('[data-testid="form-title"]').should("not.exist");
  });
 
});
