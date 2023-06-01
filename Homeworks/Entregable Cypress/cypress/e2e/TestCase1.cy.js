describe("Prueba Login Product Store",function(){

    //Prueba exitosa
    it("Prueba de login exitoso",function(){
        cy.visit("https://www.demoblaze.com/")
        //Me logeo como Username
        cy.get('#login2').click()
        cy.wait(2000);
        cy.get('#loginusername').type("Username")
        cy.get('#loginpassword').type("password")
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()   
        //valido que aparezca al lado izquierdo mi Usuario
        cy.get('#nameofuser').should('contain',"Welcome Username")
        //valido que aparezca el logo al lado derecho
        cy.get('#nava > img').should('exist')
       
    })
})