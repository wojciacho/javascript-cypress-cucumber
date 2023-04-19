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

  contactUsEl() {
    return cy.get("#navbarExample > ul > li:nth-child(2) > a");
  }

  contactUsEmailEl() {
    return cy.get("#recipient-email");
  }

  contactUsNameEl() {
    return cy.get("#recipient-name");
  }

  contactUsMessageEl() {
    return cy.get("#message-text");
  }

  contactUsSendButton() {
    return cy.get(
      "#exampleModal > div > div > div.modal-footer > button.btn.btn-primary"
    );
  }

  signUpEl() {
    return cy.get("#signin2");
  }

  signUpName() {
    return cy.get("#sign-username");
  }

  signUpPassword() {
    return cy.get("#sign-password");
  }

  signUpButton() {
    return cy.get(
      "#signInModal > div > div > div.modal-footer > button.btn.btn-primary"
    );
  }

  loginEl() {
    return cy.get("#login2")
  }
}

export default new demoBlazeStore();
