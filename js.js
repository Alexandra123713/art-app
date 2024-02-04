
document.getElementById('hamburger-menu').addEventListener('click', function (){
    const itemsOfMenu = ['home', 'about', 'artists', 'careers', 'news', 'company']
    const dropdownMenuList = document.getElementById('dropdownMenu')
    dropdownMenuList.innerHTML = ''
    for(let i=0; i<itemsOfMenu.length; i++) {
        const itemOfMenu = itemsOfMenu[i]
        const menuItem = document.createElement('a')
        menuItem.href = '#'
        menuItem.textContent = itemOfMenu
        dropdownMenuList.appendChild(menuItem)
    }
    dropdownMenuList.style.display = 'block'
    console.log(dropdownMenuList)
});
