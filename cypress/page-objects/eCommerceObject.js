class eCommerce {
  navigate() {
    return cy.visit("https://rahulshettyacademy.com/angularpractice");
  }

  nameBox() {
    return cy.get('.form-group > input[name="name"]')
  }

  genderBox() {
    return cy.get("#exampleFormControlSelect1")
  }

  radioInput() {
    return cy.get("#inlineRadio3")
  }

  shopURL() {
    return cy.get(":nth-child(2) > .nav-link")
  }

  nameBoxAssert() {
    return cy.get('h4 > input[name="name"]')
  }

  checkoutButton() {
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
  }

  cartButton() {
    return cy.get(':nth-child(4) > :nth-child(5) > .btn')
  }

  purchaseButton() {
    return cy.get('.ng-untouched > .btn')
  }
 
}

export default new eCommerce();
