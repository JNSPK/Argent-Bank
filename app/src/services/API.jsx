import { getLoginData } from './API-Data';

/* Get Login */
export const getLogin = async (identifiants) => {
  const URL_API = 'http://localhost:3001/api/v1/user/login';

  const loginResponse = await fetch(URL_API, {
    body: JSON.stringify(identifiants),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then((response) => response.json());

  console.log(loginResponse);
  return getLoginData(loginResponse);
};
