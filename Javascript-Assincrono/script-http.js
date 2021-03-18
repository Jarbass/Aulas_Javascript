const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
    method: "POST",
    body: '{"title": "Javascript"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
}

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))