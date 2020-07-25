const buger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

buger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden');
    }
})