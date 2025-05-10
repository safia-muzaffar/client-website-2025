var searchIcon=document.querySelector(".search-icon");
var searchForm=document.querySelector(".search-form");
searchIcon.addEventListener('click',() => {
    searchForm.classList.add('active');
    cartItemContainer.classList.remove('active');
}
)

var cartIcon=document.querySelector(".cart-icon");
var cartItemContainer=document.querySelector(".cart-item-container");
cartIcon.addEventListener('click',() => {
    cartItemContainer.classList.add('active');
    searchForm.classList.remove('active');
}
)

// navbar

// Toggle mobile navbar
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

