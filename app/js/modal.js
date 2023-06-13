
// Находим в документе нужные элементы: кнопка открытия, модальное окно и кнопка закрытия
const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');

// Прослушиваем клик на кнопке открытия и открываем модальное окно
button.addEventListener('click', function () {
  console.log('click!!!');
  modal.classList.remove('hidden');
});

// Прослушиваем клик на кнопке закрытия и закрываем модалку
buttonClose.addEventListener('click', function () {
  modal.classList.add('hidden');
});

// Прослушиваем клик на всем экране и закрываем модальное окно
modal.addEventListener('click', function ( ) {
  modal.classList.add('hidden');
});

// запрещаем передавать клик внутри модальное окна родителю, чтобы при клике внутри модального окна окно не закрывалось
modal.querySelector('.modal').addEventListener('click', function (e) {
  e.stopPropagation();
});
