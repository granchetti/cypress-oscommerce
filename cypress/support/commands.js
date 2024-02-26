import 'cypress-mochawesome-reporter/register';

Cypress.Commands.add("fillUserDetails", (userData) => {
  cy.get('body').then($body => {
    if ($body.find("#shipping_address-firstname").is(':visible')) {
      cy.get("#shipping_address-firstname").type(userData.firstname);
      cy.get("#shipping_address-lastname").type(userData.lastname);
      cy.get("#shipping_address-street_address").type(userData.street_address);
      cy.get("#shipping_address-postcode").type(userData.postcode);
      cy.get("#shipping_address-city").type(userData.city);
      cy.get("#checkout-email_address").type(userData.email);
    }
  });
});


Cypress.Commands.add("addProductToCart", (productName, quantity) => {
  cy.contains(productName).click();
  cy.wait(1000);
  cy.get("#btn-cart > .add-to-cart").click();
  if(quantity !== "1") {
    cy.get(".qty-inp-s").click();
    cy.get(".qty-inp-s").clear().type(quantity);
  }
  cy.wait(1000);
  cy.get(".right-buttons > .btn-2").click();
});

Cypress.Commands.add("checkoutProducts", (confirmationMessage) => {
  cy.get('body').then($body => {
    if ($body.find("#checkout-terms").is(':visible')) {
      cy.get("#checkout-terms").click();
    }
    cy.wait(1000);
    cy.get(".btn-title").click();
    cy.contains(confirmationMessage).should("be.visible");
  });
});
