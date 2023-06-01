describe("Prueba carrito de compras Product Store",function(){


    it("Prueba de agregar productos al Carrito de compras",function(){
        cy.visit("https://www.demoblaze.com/")
        cy.wait(1000);
        //agregar 3 productos al carrito 
        
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.wait(2000);//dejo un tiempo para que se alcance aguardar la selección
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.active > .nav-link').click()
        cy.get(':nth-child(2) > .card > :nth-child(1) > .card-img-top').click()
        cy.wait(2000);
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.active > .nav-link').click()
        cy.get(':nth-child(8) > .card > :nth-child(1) > .card-img-top').click()
        cy.wait(2000);
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.active > .nav-link').click()

        //compruebo que si se guarden los productos en el carrito
        cy.wait(3000);
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.success > :nth-child(2)').should("contain","Samsung galaxy s6")
        //compruebo que el navbar tenga un stilo especifico de una clase
        cy.get('.container').should("have.class","container")
        
    })
    
})