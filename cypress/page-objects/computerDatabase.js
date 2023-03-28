class computerDatabase {
    navigate() {
      return cy.visit("https://computer-database.gatling.io/computers");
    }

    searchBox() {
        return cy.get("#searchbox")
    }

    submitButton() {
        return  cy.get("#searchsubmit")
    }
}

export default new computerDatabase();