describe('Mon premier test', () => {
  it('doit visiter la page d\'accueil', () => {
    cy.visit('http://localhost:3002');
    cy.contains('Christmas Packages');
  });
});


describe('HomePage Component', () => {
  beforeEach(() => {
    // Visite la page d'accueil
    cy.visit('/');
  });

  it('should display the background video', () => {
    // Vérifie que la vidéo est présente et a le bon attribut src
    cy.get('.background-video').should('be.visible');
    cy.get('.background-video').should('have.attr', 'src').and('include', 'video.mp4');
  });

  it('should display the title and text', () => {
    // Vérifie que le titre et le texte sont présents
    cy.get('.homeContent .textDiv .HomePageTitle').should('contain.text', 'Search your destination');
    cy.get('.homeContent .textDiv .SmallText').should('contain.text', 'Christmas Packages');
  });

  it('should display the destination input field', () => {
    // Vérifie la présence du champ "Search your destination"
    cy.get('.destinationInput label').should('have.text', 'Search your destination:');
    cy.get('.destinationInput input').should('be.visible').and('have.attr', 'placeholder', 'Enter destination here...');
  });

  it('should display the date input field', () => {
    // Vérifie la présence du champ "Search by date"
    cy.get('.dateInput label').should('have.text', 'Search by date:');
    cy.get('.dateInput input').should('be.visible').and('have.attr', 'placeholder', 'Select a date...');
  });

  it('should display the price input field and range', () => {
    // Vérifie la présence du champ "Max price"
    cy.get('.priceInput .label_total label').should('have.text', 'Max price :');
    cy.get('.priceInput .total').should('contain.text', '$5000');
    cy.get('.priceInput input[type="range"]').should('be.visible').and('have.attr', 'max', '5000').and('have.attr', 'min', '700');
  });

  it('should update the range input value when changed', () => {
    // Vérifie si la valeur du champ "Max price" change lors de l'interaction
    cy.get('.priceInput input[type="range"]').invoke('val', 3000).trigger('change');
    cy.get('.priceInput .total').should('contain.text', '$3000');
  });
});
