const BASE_URL = "http://localhost:3001";

export const checkResponse = (res) => {
    if (!res.ok) {
        throw new Error(res.status);
    }

    return res.json();
};

const getToken = () => localStorage.getItem("jwt");

const normalizeItem = (item) => ({
    ...item,
    _id: item._id,
    imageUrl: item.imageUrl || item.link || "",
});

// GET all items — public
export const getItems = () => fetch(`${BASE_URL}/items`)
    .then(checkResponse)
    .then((data) => data.map((item) => normalizeItem(item)));

// ADD new item — protected
export const addItem = ({ name, imageUrl, weather }) => fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
})
    .then(checkResponse)
    .then((item) => normalizeItem(item));

// DELETE item — protected
export const deleteItem = (id) => fetch(`${BASE_URL}/items/${id}`, {
    method: "DELETE",
    headers: {
        authorization: `Bearer ${getToken()}`,
    },
}).then(checkResponse);

// UPDATE current user — protected
export const updateUserInfo = ({ name, avatar }) => fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ name, avatar }),
}).then(checkResponse);

// LIKE card — protected
export const addCardLike = (id) => fetch(`${BASE_URL}/items/${id}/likes`, {
    method: "PUT",
    headers: {
        authorization: `Bearer ${getToken()}`,
    },
})
    .then(checkResponse)
    .then((item) => normalizeItem(item));

// UNLIKE card — protected
export const removeCardLike = (id) => fetch(`${BASE_URL}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
        authorization: `Bearer ${getToken()}`,
    },
})
    .then(checkResponse)
    .then((item) => normalizeItem(item));