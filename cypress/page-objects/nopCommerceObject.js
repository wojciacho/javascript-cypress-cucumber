class nopCommerce {
    navigate() {
        return cy.visit({url: "https://demo.nopcommerce.com", failOnStatusCode: false})
    }

    computerMenu() {
        return cy.get("ul.top-menu.notmobile > li:nth-child(1) > a")
    }

    electronicsMenu() {
        return cy.get("ul.top-menu.notmobile > li:nth-child(2) > a")
    }

    apparelMenu() {
        return cy.get("ul.top-menu.notmobile > li:nth-child(3) > a")
    }

    downloadsMenu() {
        return cy.get("ul.top-menu.notmobile > li:nth-child(4) > a")
    }

    booksMenu() {
        return cy.get("ul.top-menu.notmobile > li:nth-child(5) > a")
    }

    jewelryMenu() {
        return cy.get("ul.top-menu.notmobile > li:nth-child(6) > a")
    }

    giftCardsMenu() {
        return cy.get("ul.top-menu.notmobile > li:nth-child(7) > a")
    }

    logoElement() {
        return cy.get('.header-logo > a > img')
    }
}

export default new nopCommerce ();