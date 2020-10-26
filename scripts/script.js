const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupTitle = document.querySelector('.popup__title');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const title = document.querySelector('.profile__title');
const subTitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_type_name');

// функция открытия попапа
function showPopup() {
  popup.classList.add('popup_opened');
  popup.removeEventListener('click', showPopup)
}

// функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened')
}

editButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);

function submitForm(event) {
  event.preventDefault();

  // textContent - безопасно, innerHTML - нет
  title.textContent = nameField.value;

  // закрываем попап
  closePopup();
}

// submit - событие формы на отправку - не важно, кнопка это или нажатие Enter
// достаточно одного события на всю форму
form.addEventListener('submit', submitForm);


