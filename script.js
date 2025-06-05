// Search filter by date
document.getElementById("searchDate").addEventListener("input", function () {
  const selectedDate = this.value;
  const posts = document.querySelectorAll(".post");

  posts.forEach(post => {
    const postDate = post.getAttribute("data-date");
    if (!selectedDate || postDate === selectedDate) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
});

// Open full post in new page on click
document.querySelectorAll(".post").forEach(post => {
  post.addEventListener("click", () => {
    const postId = post.getAttribute("data-id");
    // Send user to post.html with post id as URL param
    window.location.href = `post.html?id=${postId}`;
  });
});
