//Плавное появление тукста при загрузке
const headerTitle = document.querySelector('.header-title');
const breadcrumbs = document.querySelector('.breadcrumbs');
const anim = document.querySelectorAll('.anim');


window.onload = () => {
    headerTitle.classList.add('visible-text');
    breadcrumbs.classList.add('visible-text');
    anim.forEach((item) => item.classList.add('visible'));
}
