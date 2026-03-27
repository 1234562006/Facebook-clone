function addPost() {
  let input = document.getElementById("postInput");
  let text = input.value;

  if (text === "") {
    alert("Write something!");
    return;
  }

  let postDiv = document.createElement("div");
  postDiv.className = "post";

  postDiv.innerHTML = `
    <p><b>User</b></p>
    <p>${text}</p>
    <button onclick="likePost(this)">👍 Like</button>
    <button>💬 Comment</button>
    <button>↗ Share</button>
  `;

  document.getElementById("posts").prepend(postDiv);

  input.value = "";
}

function likePost(btn) {
  btn.innerHTML = "❤️ Liked";
}