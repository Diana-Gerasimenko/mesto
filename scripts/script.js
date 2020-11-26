// Создаем форму для редактирования профиля
const popupInfo = document.querySelector(".popup_type_info");
const popupCloseButton = document.querySelector(".popup__close_info");
const editButton = document.querySelector(".profile__edit-button");
const title = document.querySelector(".profile__title");
const subTitle = document.querySelector(".profile__subtitle");
const formInfo = document.querySelector(".popup__form_info");
const nameField = document.querySelector(".popup__input_type_name");
const titleField = document.querySelector(".popup__input_type_title");

function showPopup() {
  openPopup(popupInfo);
  nameField.value = title.textContent;
  titleField.value = subTitle.textContent;
}
function closeInfoPopup() {
  closePopup(popupInfo);
}

editButton.addEventListener("click", showPopup);
popupCloseButton.addEventListener("click", closeInfoPopup);

function submitForm(event) {
  event.preventDefault();
  title.textContent = nameField.value;
  subTitle.textContent = titleField.value;
  closePopup(popupInfo);
}
formInfo.addEventListener("submit", submitForm);

//Создаем массив с карточками

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardsContainer = document.querySelector(".places");
const placeTemplate = document
  .querySelector("#place-template")
  .content.querySelector(".place");

const createPlaceItem = (item) => {
  const placeElement = placeTemplate.cloneNode(true);
  const link = placeElement.querySelector(".place__image");
  const name = placeElement.querySelector(".place__text");
  name.textContent = item.name;
  link.src=item.link;
  // Открываем фото
  placeElement
    .querySelector(".place__image")
    .addEventListener("click", function () {
      openPopup(popupImage);
      bigPhoto.src = item.link;
      bigPhoto.alt = item.name;
      captionPhoto.textContent = item.name;
    });
  //Удаляем карточку
  placeElement
    .querySelector(".place__button-delete")
    .addEventListener("click", function (evt) {
      evt.target.closest(".place").remove();
    });
  //Создаем лайк для кнопки
  placeElement
    .querySelector(".place__button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("place__button_active");
    });
  return placeElement;
};
const popupImage = document.querySelector(".popup_type_image");
const bigPhoto = document.querySelector(".popup__image");
const captionPhoto = document.querySelector(".popup__caption");
const photoButton = document.querySelector(".popup__close_image");

const renderPlaceItem = (item, container) => {
  container.append(createPlaceItem(item));
};
initialCards.forEach((item) => renderPlaceItem(item, cardsContainer));

//Добавляем новую карточку в контейнер
function addCard(cardsContainer, placeElement) {
  cardsContainer.prepend(placeElement);
}

// Выбираем переменные для добавления карточки
const addButton = document.querySelector(".profile__add-button");
const popupCards = document.querySelector(".popup_type_cards");
const closeButton = document.querySelector(".popup__close_cards");
const cardForm = document.querySelector(".popup__form_cards");

//Создаем форму для добавления новой карточки
function showPopupCards() {
  openPopup(popupCards);
}
function closePopupCards() {
  closePopup(popupCards);
}

addButton.addEventListener("click", showPopupCards);
closeButton.addEventListener("click", closePopupCards);

// Добавляем карточку в контейнер через форму
const textField = document.querySelector(".popup__input_type_text-cards");
const linkField = document.querySelector(".popup__input_type_link-cards");

function createForm(event) {
  event.preventDefault();
  const newPlaceElement = createPlaceItem({
    link: linkField.value,
    name: textField.value,
  });
  closePopupCards();
  cardForm.reset();
  addCard(cardsContainer, newPlaceElement);
}
cardForm.addEventListener("submit", createForm);

function openPopup(element) {
  element.classList.add("popup_opened");
}

function closePopup(element) {
  element.classList.remove("popup_opened");
}
function closePhoto() {
  closePopup(popupImage);
}
photoButton.addEventListener("click", closePhoto);

//Функция закрытия модального окна кликом на overlay
const overlay = function(evt){
  if(evt.target == this){
    closePopup(popupImage)
    closePopup(popupInfo);
    closePopup(popupCards);
  }
}
popupImage.addEventListener('click',overlay)
popupInfo.addEventListener('click',overlay)
popupCards.addEventListener('click',overlay)

// Close popup by escape

document.addEventListener('keydown', function(event) {
  const key = event.key; 
  if (key === "Escape") {
    closePopup(popupImage)
    closePopup(popupInfo);
    closePopup(popupCards);
  }
});
