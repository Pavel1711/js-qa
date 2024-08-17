import supertest from 'supertest'
import { API_URLS, BASE_HOST } from '../../src/constants/urls'

export const books = {
  async getBooks() {
    return await supertest(BASE_HOST)
      .get(API_URLS.getBooks)
      .set('Content-Type', 'application/json')
  }
}