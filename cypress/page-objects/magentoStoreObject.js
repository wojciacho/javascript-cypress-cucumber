class magentoStore {
    navigate() {
        return cy.visit("https://magento.softwaretestingboard.com")
    }
}

export default new magentoStore ();