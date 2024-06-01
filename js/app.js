// import Alpine from 'alpinejs'
 
// window.Alpine = Alpine 
// Alpine.start()

console.log("prueba");
// Menu
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", ()=> {
    mobileMenu.classList.toggle("hidden")
});


//  =============   Top Button   =============   <<<<<<<<

// Get the button
// const mybutton = document.getElementById("btn-back-to-top");
// const nav = document.getElementById("navigation");

// // When the user scrolls down 20px from the top of the document, show the button

// const scrollFunction = () => {
//     if (
//         document.body.scrollTop > 20 ||
//         document.documentElement.scrollTop > 20
//     ) {
//         mybutton.classList.remove("hidden");
//         // nav.classList.remove("bg-blue-500");
//         // nav.classList.add("bg-red-500");
//     } else {
//         mybutton.classList.add("hidden");
//         // nav.classList.remove("bg-red-500");
//         // nav.classList.add("bg-blue-500");
//     }

//     //console.log(screen.availHeight - 100)
//     if (document.documentElement.scrollTop > screen.availHeight - 100) {
//         nav.classList.remove("bg-blue-500");
//         nav.classList.add("bg-red-500");
//     } else {
//         nav.classList.remove("bg-red-500");
//         nav.classList.add("bg-blue-500");
//     }
// };
// const backToTop = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// };

// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// window.addEventListener("scroll", scrollFunction);

//  =============   Top Button   =============   <<<<<<<<