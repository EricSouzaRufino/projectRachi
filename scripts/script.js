const nav = document.querySelector("header-style__links");
const btnNav = document.getElementById("handlerNavbar");

const headerLinks = document.querySelector(".header-style__links");

function toggleModal1() {
    if (headerLinks.classList.contains("open")) {
        headerLinks.classList.remove("open");
    } else {
        headerLinks.classList.add("open");
        // headerLinks.classList.remove("open");
    }
}

btnNav.addEventListener('click', toggleModal1);

(function () {
    headerLinks.classList.remove(open)
})();