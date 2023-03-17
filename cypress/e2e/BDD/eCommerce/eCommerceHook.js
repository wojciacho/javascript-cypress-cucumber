beforeEach(() => {
    cy.fixture("eCommerceData").then((data) => {
      globalThis.data = data;
    });
  });