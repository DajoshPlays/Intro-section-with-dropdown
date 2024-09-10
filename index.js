var toggleButton = document.querySelector(".dropdownbtn");
var closeButton = document.querySelector(".closebutton");
var sideNav = document.querySelector(".sidenav")


toggleButton.addEventListener("click", function(){
    sideNav.style.display = 'flex';
})
closeButton.addEventListener("click", function(){
    sideNav.style.display = "none";
})