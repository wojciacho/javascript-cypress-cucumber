class openCart {
  navigate() {
    return cy.visit(
      "https://demo.opencart.com/index.php?route=common/home&language=en-gb"
    );
  }

  shoppingCartEl() {
    return cy.get(".list-inline-item:nth-child(4)");
  }
}

export default new openCart();
