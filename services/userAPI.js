const URL_2 = 'http://localhost:8080/users';
const URL_1 = 'http://localhost:8080/oauth/token';

function convertToFormData(email, password){
  const params = new FormData();

  params.append('grant_type', 'password');
  params.append('username', email);
  params.append('password', password);

  return params;
}

export const fetchAuthUser = (userEmail, userPassword) => (
  fetch(URL_1, {
    method: 'POST',
    headers: { //JSON.stringify
      // "Content-Type": "application/x-www-form-urlencoded",
      // Accept: "application/json",
      // 'Authorization': 'Basic YXBpZXJyb3I6MTIzNDU=', 
     
    },
    body: convertToFormData(userEmail, userPassword),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export const fetchRegisterUser = (email, password) => (
  fetch(URL_2, {
    method: 'POST',
    headers: {
      Accept: 'application/text',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.text())
    .then((data) => data)
    .catch((error) => error)
);

export default { fetchAuthUser };