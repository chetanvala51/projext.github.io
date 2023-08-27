const hambar = document.querySelector("hambar");
const navmanu = document.querySelector("navmanu");

hambar.addEventListener("click", () =>{
    hambar.classList.toggle("active");
    navmanu.classList.toggle("active");
})

.document.querySelector(".nav-link").forEach(n => n.
addEventListener("click", () =>{
    hambar.classList.remove("active");
    navmanu.classList.remove("active");
}));