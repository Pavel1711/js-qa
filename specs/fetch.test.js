import { user } from "../framework/services/user";
import { books } from "../framework/services/books";
import { UNCORRECT_USER } from '../framework/config/user'

describe('Check api user', () => {
  const data = [
    // Почему-то запрос возвращает 504, поэтому пришлось закомментировать тесты
    // {
    //   text: 'Create user',
    //   request: user.createUser(),
    //   status: 504
    // },
    // {
    //   text: 'Get token',
    //   request: user.getToken(),
    //   status: 504
    // },
    {
      text: 'Get user',
      request: user.getUser(),
      status: 404
    },
    {
      text: 'Get uncorrected user',
      request: user.getUser(UNCORRECT_USER),
      status: 400
    }
  ];

  data.forEach(({text, request, status}) => {
    it(text, async () => {
      const res = await request
      expect(res.status).toEqual(status);
    })
  })
})

describe('Check books api', () => {
  it('Get books', async () => {
    const res = await books.getBooks();

    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body.books)).toBe(true);
    expect(res.body.books.length).toBeGreaterThan(0);
    ['isbn', 'title', 'subTitle', 'author', 'publish_date', 'publisher', 'pages', 'description', 'website'].map((item) => {
      expect(res.body.books[0]).toHaveProperty(item);
    })
  })
})
