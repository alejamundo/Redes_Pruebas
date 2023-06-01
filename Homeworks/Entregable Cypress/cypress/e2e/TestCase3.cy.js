describe("Prueba metodo de pago Product Store",function(){

    //prueba de pago exitoso
    it('Prueba de pago', () => {
        cy.visit("https://www.demoblaze.com/")
        //selecciono un producto
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.wait(2000);
        //dentro al carrito 
        cy.get('.col-sm-12 > .btn').click()
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.col-lg-1 > .btn').click()
        //valido que el producto este en la pagina carrito
        cy.get('.success > :nth-child(2)').should("contain","Samsung galaxy s6")
        //lleno formulario de pago
        cy.get('#name').type("Alejandra Orrego")
        cy.get('#country').type("Colombia")
        cy.get('#city').type("Medellín")
        cy.get('#card').type("12345678")
        cy.get('#month').type("Mayo")
        cy.get('#year').type("2023")
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      
        //validar clase css del boton comprar
         cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("have.class","btn-primary")
        //reviso mensaje de factura exitosa
        cy.get('.sweet-alert > h2').should("contain","Thank you for your purchase!")
    });
})