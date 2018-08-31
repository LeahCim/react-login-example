describe('/login', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('Successfully logs in', () => {
        cy.contains('Log out')
            .should('not.exist');

        cy.contains('button', 'Log in')
            .click();

        cy.contains('Log out')

        cy.url()
            .should('include', '/data');
    });

    ['username', 'password'].map(field => {
        it(`Disables the button when ${field} empty`, () => {
            cy.get(`#${field}`).clear();

            cy.get('[type=submit]')
                .should('be.disabled');
        });
    });

    it("Lands back on login page after wrong credentials submitted", () => {
        cy.get('#username').type("Wrong{enter}");

        cy.contains('Log out')
            .should('not.exist');

        cy.get('[type=submit')
    });

    it("Stays logged in after page refresh", () => {
        cy.contains('button', 'Log in')
            .click();

        cy.reload();

        cy.contains('Log out');
    });
});