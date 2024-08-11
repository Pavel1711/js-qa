import supertest from 'supertest'
import { API_URLS, BASE_HOST } from '../../src/constants/urls'

export const books = {
  async createBook(data, token) {
    return await supertest(BASE_HOST)
      .post(API_URLS.createBooks)
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(data)
  },

  async updateBook(isbn, data, token) {
    return await supertest(BASE_HOST)
      .put(API_URLS.updateBook(isbn))
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(data)
  },

  async getBook(isbn) {
    return await supertest(BASE_HOST)
      .get(API_URLS.getBook(isbn))
      .set('Content-Type', 'application/json')
  },

  async getBooks() {
    return await supertest(BASE_HOST)
      .get(API_URLS.getBooks)
      .set('Content-Type', 'application/json')
  }
}