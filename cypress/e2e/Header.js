describe('Test du Header', () => {
  beforeEach(() => {
    // Visiter la page où se trouve le composant Header
    cy.visit('/'); // Remplacez par l'URL où le composant est rendu
  });

  it('devrait afficher/masquer le menu au clic de l\'icône navbar', () => {
    // Vérifier que le menu n'est pas visible au départ
    cy.get('a').should('not.exist');

    // Spy sur console.log pour vérifier si "Icone cliquée" est affiché
    cy.spy(console, 'log').as('consoleLog');

    // Clic sur l'icône de la navbar
    cy.get('[alt="Navbar Icon"]').click();

    // Vérifier que le message "Icone cliquée" est affiché dans la console
    cy.get('@consoleLog').should('have.been.calledWith', 'Icone cliquée');

    // Vérifier que le menu devient visible après le clic
    cy.get('a').should('be.visible');

    // Clic sur l'icône pour fermer le menu
    cy.get('[alt="Navbar Icon"]').click();

    // Vérifier que le menu est masqué
    cy.get('a').should('not.exist');

    // Vérifier de nouveau que "Icone cliquée" est affiché dans la console
    cy.get('@consoleLog').should('have.been.calledWith', 'Icone cliquée');
  });
});
