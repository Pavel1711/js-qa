export const BASE_HOST = 'https://bookstore.demoqa.com'

export const API_URLS = {
  createUser: '/Account/v1/User/',
  getToken: '/Account/v1/GenerateToken/',
  setAuthUser: '/Account/v1/Authorized/',
  deleteUser: userId => `/Account/v1/User/${userId}/`,
  getInfoUser: userId => `/Account/v1/User/${userId}/`,
  createBooks: '/BookStore/v1/Books/',
  updateBook: fromIsbn => `/BookStore/v1/Books/${fromIsbn}/`,
  getBook: isbn => `/BookStore/v1/Book/?ISBN=${isbn}`,
  getBooks: '/BookStore/v1/Books/',
  deleteBook: '/BookStore/v1/Book/',
}
