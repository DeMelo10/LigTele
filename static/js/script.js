/* =====================================================================
    Scroll action functions
   ===================================================================== */
(function () {
    var menu = document.getElementById('navbar'); // colocar em cache
    var page_up = document.getElementById('pageup-icon');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40){
            menu.style.backgroundColor = "#702626";
            page_up.style.fontSize = "45px";
        }else{
            menu.style.backgroundColor = "";
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