describe('testing Typescript', ()=>{
    it('test visit', ()=>{
        cy.visit('/')
        cy.searchItem('ferrari')
        cy.clickSearchButton()
    })
})