var menuIcon=document.querySelector(".menu_icon");
var sidebar=document.querySelector(".sidebar");
var Container=document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small_sidebar");
    Container.classList.toggle("large_container");

}
