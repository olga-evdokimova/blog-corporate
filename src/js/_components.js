//Плавное появление тукста при загрузке
const headerTitle = document.querySelector('.header-title');
const breadcrumbs = document.querySelector('.breadcrumbs');
const anim = document.querySelectorAll('.anim');


window.onload = () => {
    headerTitle.classList.add('visible-text');
    breadcrumbs.classList.add('visible-text');
    anim.forEach((item) => item.classList.add('visible'));
}
//Плавный header===============================
const header = document.querySelector('.header-body');
const headerHeight = header.offsetHeight;

//хедер виден
let lastScrollTop = 0;


const open = () => {
    header.classList.add("header-open")
    header.classList.remove('header-close');
}

const close = () => {
    //добавляем стили где хедер не виден
    header.classList.add("header-close")
    //убираем стили где хедер виден
    header.classList.remove('header-open');
}

window.addEventListener('scroll', event => {
    //в переменную записываем текущее значение скролла
    let scrollDistance = window.scrollY;
    let scrollDown = scrollDistance > lastScrollTop

    let a = scrollY;

    if (scrollDown) {
        if (a > 200) {
            close()//если скролл вниз хедер не виден
        }
    } else {
        open()//если скролл вверх хедер виден
    }
    //начальное значение скролла равно текущему значению
    lastScrollTop = scrollDistance;
});
//===============================