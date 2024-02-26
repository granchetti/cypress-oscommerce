describe("Checkout process", () => {
  it("Positive result", () => {
    const confirmationMessage = "We've received your order";
    cy.fixture("products").then((products) => {
      products.forEach((product) => {
        cy.visit(Cypress.env("baseUrl"));
        cy.addProductToCart(product.name, product.quantity);
        cy.get(".with-card").click();
        cy.fixture("user_data").then((userData) => {
          cy.fillUserDetails(userData);
        });
        cy.get(".payment_class_cod > .item-radio > label > input").click();
        cy.checkoutProducts(confirmationMessage);
      });
    });
  });

  it("Negative result", () => {
    cy.fixture("products").then((products) => {
      const confirmationMessage = "We received your order";
      const product = products[0];
      cy.visit(Cypress.env("baseUrl"));
      cy.addProductToCart(product.name, product.quantity);
      cy.get(".with-card").click();
      cy.fixture("user_data").then((userData) => {
        cy.fillUserDetails(userData);
      });
      cy.get(".payment_class_cod > .item-radio > label > input").click();
      cy.checkoutProducts(confirmationMessage);
    });
  });
});
