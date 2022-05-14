/* =====================================================================
    Scroll action functions
   ===================================================================== */
(function () {
    var menu = document.getElementById('navbar'); // colocar em cache
    var page_up = document.getElementById('pageup-icon');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40){
            menu.style.backgroundColor = "#702626";
            page_up.style.fontSize = "40px";
        }else{
            menu.style.backgroundColor = "";
            page_up.style.fontSize = "0px";
        }
    });
})();