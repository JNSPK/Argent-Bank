import { getLoginData } from './API-Data';
import { getUserData } from './API-Data';

/* Get Login */
export const getLogin = async ({ email, password }) => {
  const URL_API = 'http://localhost:3001/api/v1/user/login';

  const loginResponse = await fetch(URL_API, {
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((response) => response.json());

  console.log(loginResponse);
  return getLoginData(loginResponse);
};

/* Get User Data*/
export const getUser = async (token) => {
  const URL_API = 'http://localhost:3001/api/v1/user/profile';

  const userResponse = await fetch(URL_API, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + token,
    },
    method: 'POST',
  }).then((response) => response.json());

  return getUserData(userResponse);
};
