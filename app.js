function addPost() {
  const input = document.getElementById("postText");
  const text = input.value.trim();

  if (!text) {
    alert("Tulis sesuatu dulu!");
    return;
  }

  const post = document.createElement("article");
  post.className = "post";

  const title = document.createElement("h3");
  title.textContent = "👤 You";

  const content = document.createElement("p");
  content.textContent = text;

  const button = document.createElement("button");
  button.textContent = "❤️ Like";
  button.onclick = function() {
    likePost(button);
  };

  post.append(title, content, button);
  document.getElementById("posts").prepend(post);

  input.value = "";
}

function likePost(button) {
  if (!button.dataset.liked) {
    button.dataset.liked = "yes";
    button.textContent = "❤️ Liked";
  } else {
    button.dataset.liked = "";
    button.textContent = "❤️ Like";
  }
}

function showPage(page) {
  document.getElementById("pageTitle").textContent = page;
}
