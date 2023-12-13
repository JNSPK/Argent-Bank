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
