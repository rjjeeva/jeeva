let currentPage = window.location.pathname.split("/").pop();
if(currentPage === "") currentPage = "index.html";

document.querySelectorAll(".mobile-nav a").forEach(link => {
  if(link.getAttribute("href") === currentPage){
    link.classList.add("active");
  }
});
