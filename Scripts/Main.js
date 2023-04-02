const Hamburger = document.querySelector(".bi-list");
const Arrow = document.querySelector(".bi-arrow-right");
const ResNav = document.querySelector(".res-nav");
const CloseNav = document.querySelectorAll('.close-nav')

Hamburger.addEventListener("click", () => {
    ResNav.classList.add("toggle-nav-active")
    ResNav.classList.add("active")
    // BodyHidden.classList.add("body-hidden")

})

// Arrow.addEventListener("click", () => {
//     ResNav.classList.remove("toggle-nav-active")
//     ResNav.classList.remove("active")
// })

CloseNav.forEach(e => {
    e.addEventListener("click", ()=>{

        ResNav.classList.remove("toggle-nav-active")
        ResNav.classList.remove("active")
        // BodyHidden.classList.remove("body-hidden")
    })
});
