describe('/login', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('Shows the "Log in" button', () => {
        cy.contains('button', 'Log in');
    });

    it('Disables the button when username empty', () => {
        cy.get('#username').clear();

        cy.get('button')
            .should('have.attr', 'disabled');
    });

    it('Disables the button when password empty', () => {
        cy.get('#password').clear();

        cy.get('button')
            .should('have.attr', 'disabled');
    });

    it('Shows "Log out" button after logging in', () => {
        cy.get('button').click();

        cy.contains('Log out')
    });
});