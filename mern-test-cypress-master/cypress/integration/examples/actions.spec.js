/// <reference types="Cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // https://on.cypress.io/interacting-with-elements

  it("Get header text", () => {
    cy.get(".container > div > h3").should("have.text", "Todos List");
  });
});
