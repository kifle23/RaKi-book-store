// test comments counter
const getComments = require('../modules/getComments.js').default;

describe('comments counter tests using Jest', () => {
  test('test getComments function', async () => {
    const response = await getComments(1);

    expect(response.length).toEqual(2);
  });
});
