export const BASE_HOST = 'https://bookstore.demoqa.com';

export const API_URLS = {
  createUser: '/Account/v1/User/',
  getToken: '/Account/v1/GenerateToken/',
  setAuthUser: '/Account/v1/Authorized/',
  deleteUser: (userId) => `/Account/v1/User/${userId}/`,
  getInfoUser: (userId) => `/Account/v1/User/${userId}/`,
  getBooks: '/BookStore/v1/Books/'
}