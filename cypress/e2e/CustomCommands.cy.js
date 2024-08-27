describe('Custom Commands', ()=>{

    it('Handling links', ()=>{

        cy.visit('http://demo.nopcommerce.com')

        //Wihtout using custom commands  - Direct Approach
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        
        //Using Custom Command
        cy.clicklink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch")

    })

    it.skip('Overwriting excisting commands', () =>{

        
        cy.visit('http://demo.nopcommerce.com')

        cy.clicklink("APPLE MACBOOK PRO 13-inch")
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch")
    })

    it.only('Login command', () =>{
       
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

       // cy.clicklink("Log in");
       // cy.wait(3000)

        cy.loginapp("Admin","admin123")
        
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')


    })

})