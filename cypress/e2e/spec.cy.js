describe("Checkout process", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  it("Positive result", () => {
    const confirmationMessage = "We've received your order";
    cy.fixture("products").then((products) => {
      products.forEach((product) => {
        cy.visit("https://sqademosatp.net/watch/");
        cy.verifyLogo();
        cy.addProductToCart(product.name, product.quantity, product.price);
        cy.goToCheckout();
        cy.fixture("user_data").then((userData) => {
          cy.setOrderPreferences(userData);
        });
        cy.confirmOrder();
        cy.verifyOrderConfirmation(confirmationMessage);
      });
    });
  });

  it("Negative result", () => {
    const confirmationMessage = "We received your order";
    cy.fixture("products").then((products) => {
      const product = products[0];
      cy.visit("https://sqademosatp.net/watch/");
      cy.verifyLogo();
      cy.addProductToCart(product.name, product.quantity, product.price);
      cy.goToCheckout();
      cy.fixture("user_data").then((userData) => {
        cy.setOrderPreferences(userData);
      });
      cy.confirmOrder();
      cy.verifyOrderConfirmation(confirmationMessage);
    });
  });
});
