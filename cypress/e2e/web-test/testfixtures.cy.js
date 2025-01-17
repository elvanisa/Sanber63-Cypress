describe('Login using fixture', () => {
    it('Success Login', () => {
      cy.fixture('users.json').then((users) => {
        const datauser = users[0];
        cy.loginSaucedemo(datauser.username, datauser.password)
    });
});
})