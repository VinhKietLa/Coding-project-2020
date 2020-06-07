
const btnCollapsible = document.querySelector('.collapsible');

btnCollapsible.addEventListener('click', (e) =>{
    let menuContent = document.getElementById('menu-content');
    
    menuContent.classList.toggle("hidden");
});