/* Get Login Data */
export function getLoginData(data) {
  if (data.status !== 400) {
    const res = {
      status: data.status,
      message: data.message,
      token: data.body.token,
    };

    return res;
  } else {
    const res = {
      status: data.status,
      message: data.message,
    };

    return res;
  }
}

/* Get User */
export function getUserData(data) {
  if (data.body !== undefined) {
    const res = {
      status: data.status,
      email: data.body.email,
      firstName: data.body.firstName,
      lastName: data.body.lastName,
    };

    return res;
  } else {
    const res = {
      status: 0,
      email: '',
      firstName: '',
      lastName: '',
    };

    return res;
  }
}
