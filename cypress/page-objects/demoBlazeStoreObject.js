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
    return cy.get("#login2");
  }

  loginNameEl() {
    return cy.get("#loginusername");
  }

  loginPasswordEl() {
    return cy.get("#loginpassword");
  }

  loginButton() {
    return cy.get(
      "#logInModal > div > div > div.modal-footer > button.btn.btn-primary"
    );
  }

  logoutEl() {
    return cy.get("#logout2");
  }

  successButton() {
    return cy.get(".btn-success");
  }

  cartEl() {
    return cy.get("#cartur");
  }

  placeOrderNameEl() {
    return cy.get("#name");
  }

  placeOrderCountryEl() {
    return cy.get("#country");
  }

  placeOrderCityEl() {
    return cy.get("#city");
  }

  placeOrderCardEl() {
    return cy.get("#card");
  }

  placeOrderMonthEl() {
    return cy.get("#month");
  }

  placeOrderYearEl() {
    return cy.get("#year");
  }

  purchaseButton() {
    return cy.get(
      "#orderModal > div > div > div.modal-footer > button.btn.btn-primary"
    );
  }

  monitorsEl() {
    return cy.get(".list-group-item").contains("Monitors");
  }

  appleMonitorEl() {
    return cy.get("#tbodyid > div:nth-child(1) > div > div > h4 > a")
  }
}

export default new demoBlazeStore();
