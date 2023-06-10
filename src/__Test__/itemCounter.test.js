const getBooks = require('../modules/getBooks.js').default;

describe('items counter tests using Jest', () => {
  test('test getBooks function', async () => {
    const response = await getBooks();

    expect(response.length).toEqual(18);
  });
});
