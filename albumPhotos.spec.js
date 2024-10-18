describe('jsonplaceholder.typicode.com - Album Photos', () => {
  it('should navigate to the album photos page and validate the data', () => {
    // 1. Acessar o link https://jsonplaceholder.typicode.com/guide/
    cy.visit('https://jsonplaceholder.typicode.com/guide/');

    // 2. Acessar o menu Guide
    cy.get('#guide-link').click();

    // 3. Navegar até o link /albums/1/photos e abri-lo
    cy.get('a[href="/posts/1/comments"]').click();

    // 4. Capturar os dados exibidos em tela e salvá-los num array JSON
    cy.get('.comment').then(($comments) => {
      const commentsData = [];
      $comments.each((index, comment) => {
        const commentData = {
          id: Cypress.$(comment).find('.comment-id').text(),
          name: Cypress.$(comment).find('.comment-name').text(),
          email: Cypress.$(comment).find('.comment-email').text(),
          body: Cypress.$(comment).find('.comment-body').text(),
        };
        commentsData.push(commentData);
      });
      cy.writeFile('cypress/fixtures/comments.json', commentsData);
    });

    // 5. Validar os dados do objeto com id = 6
    cy.fixture('comments.json').then((comments) => {
      const comment6 = comments.find((c) => c.id === '6');
      expect(comment6.id).to.equal('6');
      expect(comment6.name).to.equal('Hayden Luettgen');
      expect(comment6.email).to.equal('Nikita@garfield.biz');
      expect(comment6.body).to.contain('Sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    });
  });
});