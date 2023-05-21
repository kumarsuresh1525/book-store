/// <reference types="cypress" />

describe('Book store app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3001');
    });

    it('displays list of products card', () => {
      cy.get('.MuiPaper-rounded').should('have.length', 9);
      cy.get('.MuiPaper-rounded .MuiTypography-subtitle2').first().should('have.text', 'GAME OF THRONES');
      cy.get('.MuiPaper-rounded .MuiTypography-body2').first().should('have.text', 'by GEORGE R R MARTIN');
      cy.get('.MuiCardActions-root p').first().should('have.text', '₹200');
      cy.get('.MuiPaper-rounded .MuiTypography-subtitle2').last().should('have.text', 'SHERLOCK HOLMES: THE COMPLETE NOVELS');
      cy.get('.MuiPaper-rounded .MuiTypography-body2').last().should('have.text', 'by CONAN DOYLE');
      cy.get('.MuiCardActions-root p').last().should('have.text', '₹213');
    });
  });
