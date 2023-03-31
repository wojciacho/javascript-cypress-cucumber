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
}

export default new magentoStore ();