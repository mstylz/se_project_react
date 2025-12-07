const BASE_URL = "http://localhost:3001/items";

export const getItems = () => {
    return fetch(BASE_URL).then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
    });
};

export const addItem = ({ name, link, weather }) => {
    return fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            link,
            weather
        }),
    }).then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
    });
};

export const deleteItem = (id) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    }).then((res) => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
    });
};