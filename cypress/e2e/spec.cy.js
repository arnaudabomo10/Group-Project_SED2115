describe('HomePage Component', () => {
  beforeEach(() => {
    // Visite la page d'accueil avant chaque test
    cy.visit('/');
  });

  it('should display the background video', () => {
    // Vérifie que la vidéo de fond est présente et visible
    cy.get('.background-video').should('be.visible');
    cy.get('.background-video').should('have.attr', 'src').and('include', 'video.mp4');
  });

  it('should display the search form', () => {
    // Vérifie la présence des champs de recherche
    cy.get('form').should('exist');
    cy.get('input[placeholder="e.g., YUL"]').should('exist');
    cy.get('input[placeholder="e.g., 1000"]').should('exist');
    cy.get('input[placeholder="e.g., 120"]').should('exist');
    cy.get('button[type="submit"]').should('have.text', 'Search');
  });

  it('should display suggestions when typing in the Location Code input', () => {
    // Tape dans le champ "Location Code" et vérifie les suggestions
    cy.get('input[placeholder="e.g., YUL"]').type('Y');
    cy.get('.suggestions-list').should('exist');
    cy.get('.suggestions-list li').should('have.length.greaterThan', 0);
    cy.get('.suggestions-list li').first().should('contain.text', 'YYC');
  });

  it('should update the Location Code when a suggestion is clicked', () => {
    // Clique sur une suggestion et vérifie la mise à jour du champ
    cy.get('input[placeholder="e.g., YUL"]').type('Y');
    cy.get('.suggestions-list li').first().click();
    cy.get('input[placeholder="e.g., YUL"]').should('have.value', 'YYC');
  });

  it('should display results after submitting the form with valid inputs', () => {
    // Remplit les champs du formulaire et soumet
    cy.get('input[placeholder="e.g., YUL"]').type('YUL');
    cy.get('input[placeholder="e.g., 1000"]').type('500');
    cy.get('input[placeholder="e.g., 120"]').type('60');
    cy.get('button[type="submit"]').click();

    // Vérifie que des résultats s'affichent
    cy.get('h2').should('contain.text', 'Results:');
    cy.get('ul > li').should('have.length.greaterThan', 0);
  });

  it('should display "No airports found" message if no results match the criteria', () => {
    // Soumet le formulaire avec des critères invalides
    cy.get('input[placeholder="e.g., YUL"]').type('XXX');
    cy.get('input[placeholder="e.g., 1000"]').type('10');
    cy.get('input[placeholder="e.g., 120"]').type('5');
    cy.get('button[type="submit"]').click();

    // Vérifie que le message "No airports found" s'affiche
    cy.get('h2').should('contain.text', 'Results:');
    cy.get('p').should('contain.text', 'No airports found matching the criteria.');
  });

  it('should update the Max Price range input correctly', () => {
    // Vérifie que le champ de distance est modifiable
    cy.get('input[placeholder="e.g., 1000"]').clear().type('300');
    cy.get('input[placeholder="e.g., 1000"]').should('have.value', '300');
  });

  it('should allow entering a Max Flight Duration value', () => {
    // Vérifie la saisie dans le champ "Max Flight Duration"
    cy.get('input[placeholder="e.g., 120"]').type('90');
    cy.get('input[placeholder="e.g., 120"]').should('have.value', '90');
  });
});
