<script>
const blogs = [
 { title:"Basics of Marketing", url:"marketing-basics.html", description:"Learn core marketing fundamentals." },
 { title:"4 C's of Marketing", url:"4-cs-of-marketing.html", description:"Customer-focused marketing strategy." },
 { title:"3-3-3 Rule in Marketing", url:"3-3-3-rule-marketing.html", description:"Simple rule used by marketing agencies." },
 { title:"Marketing Careers", url:"marketing-careers.html", description:"Top jobs in marketing without a degree." },
 { title:"What Is SEO?", url:"what-is-seo.html", description:"SEO meaning in business with examples." }
];

const list = document.getElementById("blog-list");

blogs.forEach(blog => {
 const article = document.createElement("article");
 article.className = "card";
 article.innerHTML = `
   <h3>${blog.title}</h3>
   <p>${blog.description}</p>
   <a href="${blog.url}" class="card-btn">Read More</a>
 `;
 list.appendChild(article);
});
</script>
