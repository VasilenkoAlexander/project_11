/* Burger menu */
const buttonBurger = document.getElementById('burgerBtn');
const menuBurger = document.getElementById('burgerMenu');

buttonBurger.addEventListener("click", function(){
    buttonBurger.classList.toggle('active');
    menuBurger.classList.toggle('active');
    document.body.classList.toggle('lock');
});
/* Smooth scroll */
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substring(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};
/* Modal */
const modalBtn = document.querySelectorAll('.button');
const modalWindow = document.querySelector('.modal-window');
const closeModal = document.querySelector('.modal-window__close');

//Вешаем событие на кнопку для показа модального окна
modalBtn.forEach(element => {
  element.addEventListener('click', function(){
    modalWindow.style.display = 'block';
    document.body.style.overflow = 'hidden'; //запрет скрола при открытом модальном окне
  });
});
//Скрыть модальное при нажатии на крестик
closeModal.addEventListener('click', function() {
    modalWindow.style.display = 'none';
    document.body.style.overflow = 'auto';
});

//Закрытие модального окна при нажатии на любое поле окна браузера
window.onclick = function (event) {
    if (event.target == modalWindow) {
        modalWindow.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
