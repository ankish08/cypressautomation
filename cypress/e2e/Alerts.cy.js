describe('Alerts', () =>{

    // Javascript Alert : Automatically close. Confirm the text.


    it('Authenticated Alert', ()=> {

        cy.visit('http://admin:admin@the-internet.herokuapp.com/basic_auth')
        
        cy.get("div[class='example'] h3").should('have.contain','Basic')
    })
})
