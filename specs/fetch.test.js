import { user } from "../framework/services/user";
import { UNCORRECT_PASSWORD_FOR_USER, ALWAYS_NEW_USER } from '../framework/config/user'
import { books } from "../framework/services/books";

let userId = '';
let token = '';

describe('Create user', () => {
  it('Used login', async () => {
    const res = await user.createUser();
    expect(res.status).toEqual(406);
    expect(res.body.message).toEqual('User exists!')
  })

  it('Uncorrect password', async () => {
    const res = await user.createUser(UNCORRECT_PASSWORD_FOR_USER)
    expect(res.status).toEqual(400);
  })

  it('Correct data', async () => {
    const res = await user.createUser(ALWAYS_NEW_USER);
    userId = res.body.userID;
    expect(res.status).toEqual(201);
  })
});

describe('Get token', () => {
  it('Uncorrect password', async () => {
    const res = await user.getToken(UNCORRECT_PASSWORD_FOR_USER)
    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual('Failed')
  })

  it('Correct data', async () => {
    const res = await user.getToken(ALWAYS_NEW_USER);
    expect(res.status).toEqual(200);
    token = res.body.token;
    ['token', 'expires', 'status', 'result'].forEach((item) => {
      expect(res.body).toHaveProperty(item);
    })
    expect(res.body.status).toEqual('Success')
  })
});

describe('Authorization user', () => {
  it('Correct data', async () => {
    const res = await user.setAuthUser(ALWAYS_NEW_USER);
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(true);
  })

  it('Uncorrect data', async () => {
    const res = await user.setAuthUser(UNCORRECT_PASSWORD_FOR_USER);
    expect(res.status).toEqual(404);
    expect(res.body.message).toEqual('User not found!');
  })
});

describe('Get info user', () => {
  it('Correct data', async () => {
    const res = await user.getInfoUser(userId, token);
    expect(res.status).toEqual(200);
  })
});

let isbn = '';
let secondIsbn = '';

describe('Get books', () => {
  it('Correct data', async () => {
    const res = await books.getBooks();
    isbn = res.body.books[0].isbn;
    secondIsbn = res.body.books[1].isbn;
    expect(res.status).toEqual(200);
  })
});

describe('Create books', () => {
  it('Correct data', async () => {
    const data = {
      userId, collectionOfIsbns: [
        {
          isbn
        }
      ]
    };
    const res = await books.createBook(data, token);
    expect(res.status).toEqual(201);
  })
});

describe('Update book', () => {
  it('Correct data', async () => {
    const data = {
      userId,
      isbn: secondIsbn
    };
    const res = await books.updateBook(isbn, data, token);
    expect(res.status).toEqual(200);
  })
});

describe('Get book', () => {
  it('Correct data', async () => {
    const res = await books.getBook(isbn);
    ['isbn', 'title', 'subTitle', 'author', 'publish_date', 'publisher', 'pages', 'description', 'website'].forEach((item) => {
      expect(res.body).toHaveProperty(item);
    })
    expect(res.status).toEqual(200);
  })
});

describe('Delete book', () => {
  it('Correct data', async () => {
    const data = {
      isbn: secondIsbn,
      userId
    }
    const res = await books.deleteBook(data, token);
    expect(res.status).toEqual(204);
  })
});

describe('Delete user', () => {
  it('Correct data', async () => {
    const res = await user.deleteUser(userId, token);
    expect(res.status).toEqual(204);
  })
});
