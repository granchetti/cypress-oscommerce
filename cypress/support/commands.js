import "cypress-mochawesome-reporter/register";

Cypress.Commands.add("verifyLogo", () => {
  cy.fixture("selectors").then((selectors) => {
    cy.get(selectors.logo).should("be.visible");
  });
});

Cypress.Commands.add("updateQuantity", (quantity, price) => {
  cy.fixture("selectors").then((selectors) => {
    cy.get(selectors.quantityInput).click().clear().type(quantity);
    cy.get(selectors.productPrice).should("contain", price);
  });
});

Cypress.Commands.add("addProductToCart", (productName, quantity, price) => {
  cy.fixture("selectors").then((selectors) => {
    cy.contains(productName).click();
    // I haven't found a way to remove this wait and use something else
    cy.wait(1000);
    cy.get(selectors.addToCartButton).click();
    if (quantity !== "1") {
      cy.updateQuantity(quantity, price);
    }
    cy.get(selectors.goToCartButton).click();
    cy.get(selectors.summarySection).should("be.visible")
  });
});

Cypress.Commands.add("goToCheckout", () => {
  cy.fixture("selectors").then((selectors) => {
    cy.get(selectors.checkoutButton).click();
    cy.get(selectors.shippingBox).should("be.visible")
  });
});

Cypress.Commands.add("fillUserInformation", (userData) => {
  cy.fixture("selectors").then((selectors) => {
    cy.get("body").then(($body) => {
      if ($body.find(selectors.shippingFirstName).is(":visible")) {
        cy.get(selectors.shippingFirstName).type(userData.firstname);
        cy.get(selectors.shippingLastName).type(userData.lastname);
        cy.get(selectors.streetAddress).type(userData.street_address);
        cy.get(selectors.postcode).type(userData.postcode);
        cy.get(selectors.city).type(userData.city);
        cy.get(selectors.emailAddress).type(userData.email);
      }
    });
  });
});

Cypress.Commands.add("setOrderPreferences", (userData) => {
  cy.fillUserInformation(userData);
  // I haven't found a way to remove this wait and use something else
  cy.wait(1000);
  cy.fixture("selectors").then((selectors) => {
    cy.get(selectors.paymentOptionCod).click();
  });
});

Cypress.Commands.add("agreeToTermsAndConditions", () => {
  // I haven't found a way to remove this wait and use something else
  cy.wait(1000);
  cy.fixture("selectors").then((selectors) => {
    cy.get("body").then(($body) => {
      if ($body.find(selectors.termsAndConditionsCheckbox).is(":visible")) {
        cy.get(selectors.termsAndConditionsCheckbox).click();
      }
    });
  });
});

Cypress.Commands.add("confirmOrder", () => {
  cy.agreeToTermsAndConditions();
  cy.fixture("selectors").then((selectors) => {
    cy.get(selectors.confirmOrderButton).click();
  });
});

Cypress.Commands.add("verifyOrderConfirmation", (confirmationMessage) => {
  cy.contains(confirmationMessage).should("be.visible");
});
