describe('Log in',()=>{ 
    it('open log in page',()=>{
        cy.visit('https://ds.wellnessliving.com/')
        cy.get('.css-menu-hamburger-icon').click()
        cy.get('.css-btn-sign-in-icon').click()
        cy.get('#template-passport-login').type('joli@qa.com')
    })
})