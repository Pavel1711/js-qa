import supertest from 'supertest'
import { API_URLS, BASE_HOST } from '../../src/constants/urls'
import { USER } from '../config/user'

export const user = {
  async createUser() {
    return await supertest(BASE_HOST)
      .post(API_URLS.createUser)
      .set('Content-Type', 'application/json')
      .send(USER)
  },

  async getToken() {
    return await supertest(BASE_HOST)
      .post(API_URLS.getToken)
      .set('Content-Type', 'application/json')
      .send(USER)
  },

  async getUser(payload = USER) {
    return await supertest(BASE_HOST)
      .post(API_URLS.getUser)
      .set('Content-Type', 'application/json')
      .send(payload)
  }
}