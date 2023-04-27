import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import healthCare from "../../../page-objects/healthCareObject";
healthCare;

Given("Open healthCare page", () => {
  healthCare.navigate();
  cy.url().should("include", "katalon-demo-cura");
});

When("Verify home page", () => {
  cy.get("#top > .text-vertical-center > h1")
    .should("be.visible")
    .and("contain", "CURA Healthcare Service");
  cy.get("#top > .text-vertical-center > h3")
    .should("be.visible")
    .and("contain", "We Care About Your Health");
  cy.get("#btn-make-appointment").should("be.visible");
  cy.get("body > footer > div > div > div > h4 > strong")
    .should("be.visible")
    .and("contain", "CURA Healthcare Service");
});

Then("Go to login page and verify", () => {
  healthCare.menuToggle().click();
  healthCare.loginEl().click();
  cy.url().should("include", "/profile.php#login");
  healthCare.usernameEl().should("be.visible");
  healthCare.passwordEl().should("be.visible");
  cy.get(".col-sm-12 > h2").should("be.visible").and("contain", "Login");
  cy.get("form > div.alert.alert-info > div:nth-child(1) > div > div > input")
    .should("be.visible")
    .and("have.value", "John Doe");
  cy.get("form > div.alert.alert-info > div:nth-child(2) > div > div > input")
    .should("be.visible")
    .and("have.value", "ThisIsNotAPassword");
});

Then("Login user correctly", () => {
  healthCare.usernameEl().type("John Doe");
  healthCare.passwordEl().type("ThisIsNotAPassword");
  healthCare.loginButton().click();
  cy.url().should("include", "/#appointment");
  cy.get("#appointment > div > div > div > h2")
    .should("be.visible")
    .and("contain", "Make Appointment");
  cy.get(".form-horizontal").should("be.visible");
});

Then("Logout user", () => {
  healthCare.menuToggle().click();
  healthCare.logoutEl().click();
});

Then("Login user incorrectly", () => {
  healthCare.usernameEl().type("John Doe");
  healthCare.passwordEl().type("ThisIsNotAPassword1");
  healthCare.loginButton().click();
  cy.get(".text-danger")
    .should("be.visible")
    .and(
      "contain",
      "Login failed! Please ensure the username and password are valid."
    );
});

Then("Go to history page and verify", () => {
  healthCare.menuToggle().click();
  healthCare.historyEl().click();
  cy.url().should("include", "/history.php#history");
  cy.get("#history > div > div:nth-child(1) > div > h2")
    .should("be.visible")
    .and("contain", "History");
  cy.get(".btn-default").should("be.visible");
});

When("Click make appointment button and verify url", () => {
  healthCare.appointmentButton().click();
  cy.url().should("include", "/profile.php#login");
});

Then("Fill appointment form and book appointment", () => {
  healthCare.facilityEl().select("Tokyo CURA Healthcare Center");
  healthCare.readmissionCheckboxEl().click();
  healthCare.readmissionCheckboxEl().should("be.checked");
  healthCare.healthcareProgramEl().click();
  healthCare.healthcareProgramEl().should("have.value", "Medicaid");
  healthCare.visitDateEl().type("06/06/2023");
  healthCare.commentEl().type("test", {force: true});
  healthCare.bookAppointmentButton().click();
});

Then("Verify appointment summary", () => {
  cy.url().should("include", "/appointment.php#summary");
  cy.get(".col-xs-12 > h2")
    .should("be.visible")
    .and("contain", "Appointment Confirmation");
  cy.facilityAssertion("Tokyo CURA Healthcare Center");
  cy.get("#hospital_readmission").should("contain", "Yes");
  cy.programAssertion("Medicaid");
  cy.dateAssertion("06/06/2023");
  cy.commentAssertion("test");
  healthCare.homepageButton().click();
  cy.url().should("include", "https://katalon-demo-cura.herokuapp.com");
});

Then("Fill hongkong facility appointment form and book appointment", () => {
  healthCare.facilityEl().select("Hongkong CURA Healthcare Center");
  healthCare.readmissionCheckboxEl().click();
  healthCare.readmissionCheckboxEl().should("be.checked");
  healthCare.healthcareProgramEl().click();
  healthCare.healthcareProgramEl().should("have.value", "Medicaid");
  healthCare.visitDateEl().type("06/06/2023");
  healthCare.commentEl().type("test", {force: true});
  healthCare.bookAppointmentButton().click();
});

Then("Verify hongkong appointment summary", () => {
  cy.url().should("include", "/appointment.php#summary");
  cy.get(".col-xs-12 > h2")
    .should("be.visible")
    .and("contain", "Appointment Confirmation");
  cy.facilityAssertion("Hongkong CURA Healthcare Center");
  cy.get("#hospital_readmission").should("contain", "Yes");
  cy.programAssertion("Medicaid");
  cy.dateAssertion("06/06/2023");
  cy.commentAssertion("test");
  healthCare.homepageButton().click();
  cy.url().should("include", "https://katalon-demo-cura.herokuapp.com");
});

Then("Fill seoul facility appointment form and book appointment", () => {
  healthCare.facilityEl().select("Seoul CURA Healthcare Center");
  healthCare.readmissionCheckboxEl().click();
  healthCare.readmissionCheckboxEl().should("be.checked");
  healthCare.healthcareProgramEl().click();
  healthCare.healthcareProgramEl().should("have.value", "Medicaid");
  healthCare.visitDateEl().type("06/06/2023");
  healthCare.commentEl().type("test", {force: true});
  healthCare.bookAppointmentButton().click();
});

Then("Verify seoul appointment summary", () => {
  cy.url().should("include", "/appointment.php#summary");
  cy.get(".col-xs-12 > h2")
    .should("be.visible")
    .and("contain", "Appointment Confirmation");
  cy.facilityAssertion("Seoul CURA Healthcare Center");
  cy.get("#hospital_readmission").should("contain", "Yes");
  cy.programAssertion("Medicaid");
  cy.dateAssertion("06/06/2023");
  cy.commentAssertion("test");
  healthCare.homepageButton().click();
  cy.url().should("include", "https://katalon-demo-cura.herokuapp.com");
});
