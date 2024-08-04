export const BASE_HOST = 'https://bookstore.demoqa.com';

export const API_URLS = {
  createUser: '/Account/v1/User/',
  getToken: '/Account/v1/GenerateToken/',
  setAuthUser: '/Account/v1/Authorized/',
  deleteUser: (username) => `/Account/v1/User/${username}`,
  getInfoUser: (username) => `/Account/v1/User/${username}`,
  getBooks: '/BookStore/v1/Books/'
}