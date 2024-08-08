import { user } from "../framework/services/user";
import { UNCORRECT_PASSWORD_FOR_USER, ALWAYS_NEW_USER } from '../framework/config/user'

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

describe('Delete user', () => {
  it('Correct data', async () => {
    const res = await user.deleteUser(userId, token);
    expect(res.status).toEqual(204);
  })
});
