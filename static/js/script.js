/* =====================================================================
    Scroll action functions
   ===================================================================== */
(function () {
    var menu = document.getElementById('navbar'); // colocar em cache
    var logo = document.querySelector("#logo");
    var page_up = document.getElementById('pageup-icon');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40){
            menu.style.backgroundColor = "#702626";
            logo.setAttribute('src','../static/images/logo-black-short-329x256.png');
            page_up.style.fontSize = "45px";
        }else{
            menu.style.backgroundColor = "";
            logo.setAttribute('src','../static/images/logo-red-short-329x256.png');
            page_up.style.fontSize = "0px";
        }
    });
})();

/* =====================================================================
    Navbar
   ===================================================================== */

const toggleMenu = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation');

toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}