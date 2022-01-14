const URL = 'http://localhost:8080/events';

export const fetchSaveEvents = (event) => (
  fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/text',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })
    .then((response) => response.text())
    .then((data) => data)
    .catch((error) => error)
);


export default { fetchSaveEvents };