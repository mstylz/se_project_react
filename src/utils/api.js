const BASE_URL = "http://localhost:3001/items";

export const checkResponse = (res) => {
  if (!res.ok) {
    throw new Error(res.status);
  }
  return res.json();
};

// Normalizes ALL items so the app always receives consistent data
const normalizeItem = (item) => ({
  ...item,
  _id: item._id ?? item.id,
  link: item.link ?? item.imageUrl, // unify image field
});

export const getItems = () => {
  return fetch(BASE_URL)
    .then(checkResponse)
    .then((data) => data.map(normalizeItem));
};

export const addItem = ({ name, link, weather }) => {
  // Always send "link" to server
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      link,
      weather,
    }),
  })
    .then(checkResponse)
    .then(normalizeItem);
};

export const deleteItem = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
};
