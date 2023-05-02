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

  myAccountEl() {
    return cy.get(
      "#top > div.container > div.nav.float-end > ul > li:nth-child(2)"
    );
  }

  loginEl() {
    return cy.get(
      "#top > div.container > div.nav.float-end > ul > li:nth-child(2) > div > ul > li:nth-child(2) > a"
    );
  }

  emailLoginInput() {
    return cy.get("#input-email");
  }

  passwordLoginInput() {
    return cy.get("#input-password");
  }

  loginButton() {
    return cy.get("#form-login > button");
  }

  currencyEl() {
    return cy.get("#form-currency");
  }
}

export default new openCart();
