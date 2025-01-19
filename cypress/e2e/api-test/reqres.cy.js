describe('Reqres Test', () => {
    it('Get List User', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    });
    it('Create User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "aula",
                "job": "QA"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})