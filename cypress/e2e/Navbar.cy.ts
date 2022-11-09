/// <reference types="cypress" />

describe("Sidebar", () => {
  it("should display navbar", () => {
    cy.visit("/");

    cy.findByRole("navigation", { name: "Navbar" }).should("exist");
  });
});
