describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('/')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it ('can navigate to ivysaur page and see its content', function() {
    cy.visit('/')
    cy.contains('ivysaur').click()
    cy.location('pathname').should('include', '/pokemon/ivysaur')
    cy.contains(/chlorophyll/i).should('be.visible')
  })
})