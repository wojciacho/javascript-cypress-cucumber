class sauceDemo {
  navigate() {
    return cy.visit("https://www.saucedemo.com");
  }

  burgerMenu() {
    return cy.get("#react-burger-menu-btn");
  }

  logoutButton() {
    return cy.get("#logout_sidebar_link");
  }

  priceBox() {
    return cy.get(".inventory_details_price");
  }

  addBackPackToCart() {
    return cy.get("#add-to-cart-sauce-labs-backpack");
  }

  addJacketToCart() {
    return cy.get('#add-to-cart-sauce-labs-fleece-jacket')
  }

  cartButton() {
    return cy.get(".shopping_cart_link");
  }

  filterButton() {
    return cy.get(".product_sort_container")
  }
}

export default new sauceDemo();
