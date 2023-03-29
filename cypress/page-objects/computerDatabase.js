class computerDatabase {
    navigate() {
      return cy.visit("https://computer-database.gatling.io/computers");
    }

    searchBox() {
        return cy.get("#searchbox")
    }

    submitButton() {
        return cy.get("#searchsubmit")
    }

    saveButton() {
        return cy.get(".primary")
    }

    warningMessage() {
        return cy.get(".warning")
    }

    companyEl() {
        return cy.get("#company")
    }
}

export default new computerDatabase();