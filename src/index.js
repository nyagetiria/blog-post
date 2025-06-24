 const URL = "http://localhost:3000/posts";

document.addEventListener("DOMContentLoaded", () => {
  displayPosts();
  document.getElementById("new-post-form").addEventListener("submit", addPost);
});

function displayPosts() {
  fetch(URL)
    .then(res => res.json())
    .then(posts => {
      const list = document.getElementById("post-list");
      list.innerHTML = "";
      posts.forEach(p => {
        const div = document.createElement("div");
        div.innerHTML = `<h3 data-id="${p.id}">${p.title}</h3><img src="${p.image}" />`;
        div.querySelector("h3").onclick = () => showPost(p.id);
        list.appendChild(div);
      });
      if (posts.length) showPost(posts[0].id);
    });
}

function showPost(id) {
  fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(p => {
      const d = document.getElementById("post-detail");
      d.innerHTML = `
        <h2>${p.title}</h2>
        <p><strong>${p.author}</strong></p>
        <img src="${p.image}" />
        <p>${p.content}</p>
        <button onclick="editForm(${p.id}, '${p.title}', \`${p.content.replace(/`/g, "\\`")}\`)">Edit</button>
        <button onclick="deletePost(${p.id})">Delete</button>
        <div id="edit-form-container"></div>
      `;
    });
}

function addPost(e) {
  e.preventDefault();
  const f = e.target;
  const newPost = {
    title: f.title.value,
    author: f.author.value,
    content: f.content.value,
    image: f.image.value || "https://via.placeholder.com/150"
  };
  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost)
  }).then(() => {
    f.reset();
    displayPosts();
  });
}

function deletePost(id) {
  fetch(`${URL}/${id}`, { method: "DELETE" }).then(() => displayPosts());
}

function editForm(id, title, content) {
  const c = document.getElementById("edit-form-container");
  c.innerHTML = `
    <form id="edit-post-form">
      <input name="title" value="${title}" />
      <textarea name="content">${content}</textarea>
      <button>Save</button>
    </form>
  `;
  c.querySelector("form").onsubmit = e => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      content: e.target.content.value
    };
    fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => displayPosts());
  };
}
