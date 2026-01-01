const blogs = [
  {
    title: "What Is Business?",
    description: "Understand the meaning, types, and importance of business.",
    url: "what-is-business.html"
  },
];

const list = document.getElementById("blog-list");

blogs.forEach(blog => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h2><a href="${blog.url}">${blog.title}</a></h2>
    <p>${blog.description}</p>
  `;
  list.appendChild(article);

});
