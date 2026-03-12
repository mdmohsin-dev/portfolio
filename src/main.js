document.getElementById("year").innerText = new Date().getFullYear()




const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById("sidebar")
const closeSidebar = document.getElementById("close-sidebar")
const links = sidebar.querySelectorAll("a")




menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active")
})


closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active")
})




links.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});