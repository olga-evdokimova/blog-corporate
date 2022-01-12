//Плавное появление тукста при загрузке
const headerTitle = document.querySelector('.header-title');
const breadcrumbs = document.querySelector('.breadcrumbs');

window.onload = () => {
    headerTitle.classList.add('visible');
    breadcrumbs.classList.add('visible');

}
