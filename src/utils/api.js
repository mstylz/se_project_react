const BASE_URL = "http://localhost:3001/items";

export const checkResponse = (res) => {
  if (!res.ok) {
    throw new Error(res.status);
  }
  return res.json();
};

export const getItems = () => {
  return fetch(BASE_URL).then(checkResponse);
};

export const addItem = ({ name, link, weather }) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      link,
      weather,
    }),
  }).then(checkResponse);
};

export const deleteItem = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
};
