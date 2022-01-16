//Плавное появление тукста при загрузке
const title = document.querySelector('.title');
const breadcrumbs = document.querySelector('.breadcrumbs');
const anim = document.querySelectorAll('.anim');


window.onload = () => {
    title.classList.add('visible-text');
    breadcrumbs.classList.add('visible-text');
    anim.forEach((item) => item.classList.add('visible'));
}
//Плавный header===============================
const headerBody = document.querySelector('.header-body');
const headerHeight = headerBody.offsetHeight;
const headerTop = document.querySelector('.header-top');

//хедер виден
let lastScrollTop = 0;


const open = () => {
    headerBody.classList.add("header-open");
    headerBody.classList.remove('header-close');
    // console.log('open');
}

const close = () => {
    headerBody.classList.add("header-close")
    headerBody.classList.remove('header-open');
    // console.log('close');
}

window.addEventListener('scroll', event => {
    //в переменную записываем текущее значение скролла
    let scrollDistance = window.scrollY;
    let scrollDown = scrollDistance > lastScrollTop

    let a = scrollY;
    // console.log(a);
   // console.log(scrollDown);

    if (scrollDown) {
        if (a > 2) {
            headerBody.classList.add('box-shadow');
        }
        else {
        }
        if (a > 200) {
            close()
            
        } else {
            open()
        }
    } else {
        open()
        if (a < 200) {
            headerBody.classList.remove('box-shadow');
        }
    }
   
    lastScrollTop = scrollDistance;
});
//===============================