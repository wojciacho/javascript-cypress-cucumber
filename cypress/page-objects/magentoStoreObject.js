class magentoStore {
    navigate() {
        return cy.visit("https://magento.softwaretestingboard.com")
    }

    cartEl() {
        return cy.get("header > div.header.content > div.minicart-wrapper > a")
    }

    addToCartButton() {
        return cy.get("#product-addtocart-button")
    }

    qtyEl() {
        return cy.get("#qty")
    }

    loginEl() {
        return  cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a")
    }

    emailEl() {
        return cy.get("#email")
    }

    passwordEl() {
        return cy.get("#pass")
    }

    loginButton() {
        return cy.get("#send2")
    }

    menEl() {
        return  cy.get("#ui-id-5 > span:nth-child(2)")
    }
}

export default new magentoStore ();