class demoBlazeStore {
  navigate() {
    return cy.visit("https://www.demoblaze.com");
  }

  phonesEl() {
    return cy.get("#itemc").contains("Phones");
  }

  nexusPhoneEl() {
    return cy.get("#tbodyid > div:nth-child(3) > div > div > h4 > a");
  }

  laptopsEl() {
    return cy.get(".list-group-item").contains("Laptops");
  }

  macBookProEl() {
    return cy.get("#tbodyid > div:nth-child(6) > div > div > h4 > a");
  }
}

export default new demoBlazeStore();
