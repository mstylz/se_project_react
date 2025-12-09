const BASE_URL = "http://localhost:3001/items";

export const checkResponse = (res) => {
    if (!res.ok) {
        throw new Error(res.status);
    }
    return res.json();
};

// Normalize item → ALWAYS return imageUrl + _id
const normalizeItem = (item) => {
    return {
        ...item,
        _id: item._id !== undefined && item._id !== null ? item._id : item.id,
        imageUrl: item.imageUrl && item.imageUrl !== "" ? item.imageUrl : item.link
    };
};

// GET all items
export const getItems = () => {
    return fetch(BASE_URL)
        .then(checkResponse)
        .then((data) => data.map((item) => normalizeItem(item)));
};

// ADD new item
export const addItem = ({ name, imageUrl, weather }) => {
    return fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                imageUrl, // <-- use imageUrl moving forward
                weather
            })
        })
        .then(checkResponse)
        .then((item) => normalizeItem(item));
};

// DELETE item
export const deleteItem = (id) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    }).then(checkResponse);
};