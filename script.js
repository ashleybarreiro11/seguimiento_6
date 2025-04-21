const postContainer = document.getElementById("postContainer");

function createPost(name, message, imageURL) {
    const post = document.createElement("div");
    post.className = "post";

    const img = document.createElement("img");
    img.src = imageURL;

    const title = document.createElement("h3");
    title.textContent = name;

    const text = document.createElement("p");
    text.textContent = message;

    post.appendChild(img);
    post.appendChild(title);
    post.appendChild(text);

    return post;
}

for (let index = 1; index <= 826; index++) {
    const name = `Character ${index}`;
    const message = `Esta es mi publicación número ${index}. Esto es una prueba de generación de relleno por medio de funciones y ciclos.`;
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${index}.jpeg`;

    const post = createPost(name, message, imageURL);
    postContainer.appendChild(post);
}
