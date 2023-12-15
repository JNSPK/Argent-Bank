import { getLoginData, getUserData, saveUserProfilData } from './API-Data';

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

/* Save new name on edit */
export const saveUserProfil = async (token, fullName) => {
  const URL_API = 'http://localhost:3001/api/v1/user/profile';

  const saveUserProfilResponse = await fetch(URL_API, {
    body: JSON.stringify(fullName),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + token,
    },
    method: 'PUT',
  }).then((response) => response.json());

  return saveUserProfilData(saveUserProfilResponse);
};
