import { backend } from 'declarations/backend';

const postsContainer = document.getElementById('posts-container');
const newPostButton = document.getElementById('new-post-button');
const newPostForm = document.getElementById('new-post-form');
const postTitleInput = document.getElementById('post-title');
const postAuthorInput = document.getElementById('post-author');
const submitPostButton = document.getElementById('submit-post');

let quill = new Quill('#editor', {
  theme: 'snow'
});

function displayPosts(posts) {
  postsContainer.innerHTML = '';
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `<h2>${post.title}</h2><p>By ${post.author}</p>${post.body}`;
    postsContainer.appendChild(postElement);
  });
}

async function fetchAndDisplayPosts() {
  const posts = await backend.get_posts();
  displayPosts(posts);
}

newPostButton.addEventListener('click', () => {
  newPostForm.style.display = 'block';
});

submitPostButton.addEventListener('click', async () => {
  const title = postTitleInput.value;
  const author = postAuthorInput.value;
  const body = quill.root.innerHTML;

  await backend.create_post({ title, body, author });

  postTitleInput.value = '';
  postAuthorInput.value = '';
  quill.root.innerHTML = '';
  newPostForm.style.display = 'none';

  fetchAndDisplayPosts();
});

fetchAndDisplayPosts();

