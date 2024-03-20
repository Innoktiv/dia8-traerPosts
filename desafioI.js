// desafioI.js

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        const postDataDiv = document.getElementById('post-data');
        postDataDiv.innerHTML = '';

        const ul = document.createElement('ul');

        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = `${post.id}. ${post.title}`;
            ul.appendChild(li);
        });

        postDataDiv.appendChild(ul);
        } catch (error) {
        console.error('Error al obtener los posts:', error);
        }
}