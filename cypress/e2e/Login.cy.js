import 'cypress-iframe'
describe('Login', ()=>{

    it('Login', ()=>{


        cy.visit('https://support.orangehrm.com/portal/en/signin')
        //cy.get('iamFrame').its('0.contentDocument.body').find("input[name='username']").type('ankishc95@gmail.com')
        //cy.getIframe('#iamFrame').find("input[name='username']").type('ankishc95@gmail.com')
       // cy.frameLoaded('#iamFrame')
         //cy.iframe('#iamFrame')
      // cy.iframe().find("input[name='username']").type('ankishc95@gmail.com')
       // cy.get("input[name='username']").type('ankishc95@gmail.com')
        //cy.get("input[placeholder='Password']").type('ankish')

        cy.get('#iamFrame').then((iframedata)=>{
            const idata=iframedata.contents().find('body')
            cy.wrap(idata).as('iframe')
        })
            cy.get('@iframe').find("input[name='username']").type('ankishc95@gmail.com')
        })

    })
