import supertest from 'supertest'
import { API_URLS, BASE_HOST } from '../../src/constants/urls'
import { USER } from '../config/user'

export const user = {
  async createUser(payload = USER) {
    return await supertest(BASE_HOST)
      .post(API_URLS.createUser)
      .set('Content-Type', 'application/json')
      .send(payload)
  },

  async getToken(payload = USER) {
    return await supertest(BASE_HOST)
      .post(API_URLS.getToken)
      .set('Content-Type', 'application/json')
      .send(payload)
  },

  async setAuthUser(payload = USER) {
    return await supertest(BASE_HOST)
      .post(API_URLS.setAuthUser)
      .set('Content-Type', 'application/json')
      .send(payload)
  },

  async deleteUser(userId, token) {
    return await supertest(BASE_HOST)
      .delete(API_URLS.deleteUser(userId))
      .set('Authorization', `Bearer ${token}`)
  },

  async getInfoUser(userId, token) {
    return await supertest(BASE_HOST)
      .get(API_URLS.getInfoUser(userId))
      .set('Authorization', `Bearer ${token}`)
  }
}