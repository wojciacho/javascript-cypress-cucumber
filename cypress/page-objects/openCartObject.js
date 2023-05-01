class openCart {
  navigate() {
    return cy.visit(
      "https://demo.opencart.com/index.php?route=common/home&language=en-gb"
    );
  }

  shoppingCartEl() {
    return cy.get(".list-inline-item:nth-child(4)");
  }

  allDesktopsEl() {
    return cy.get("#narbar-menu > ul > li:nth-child(1) > div > a");
  }
}

export default new openCart();
