// Создаем форму для редактирования профиля
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupTitle = document.querySelector('.popup__title');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const title = document.querySelector('.profile__title');
const subTitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_type_name');
const titleField = document.querySelector('.popup__input_type_title');

  function showPopup() {
    popup.classList.add('popup_opened');
    popup.removeEventListener('click', showPopup);
    nameField.value = title.textContent;
    titleField.value = subTitle.textContent;
  }
  function closePopup() {
    popup.classList.remove('popup_opened')
  }
  
  editButton.addEventListener('click', showPopup);
  popupCloseButton.addEventListener('click', closePopup);
  
  function submitForm(event) {
    event.preventDefault();
    title.textContent = nameField.value;
    subTitle.textContent = titleField.value;
    closePopup();
  }
  form.addEventListener('submit', submitForm);

//Создаем массив с карточками

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardsContainer = document.querySelector('.places');
const placeTemplate = document.querySelector('#place-template').content.querySelector('.place');

const createPlaceItem = (item) => {
  const placeElement = placeTemplate.cloneNode(true);
  const link = placeElement.querySelector('.place__image');
  const name = placeElement.querySelector('.place__text');
  name.textContent = item.name;
  link.style.backgroundImage = `url(${item.link})`;
// Открываем фото
placeElement.querySelector('.place__image').addEventListener('click',function(){
  photo.classList.toggle('popup-photo__opened');
  photo.querySelector('.popup-photo__image').src=item.link;
  photo.querySelector('.popup-photo__image').alt.textContent=item.name;
  photo.querySelector('.popup-photo__text').textContent=item.name;
  }) 
  const photo = document.querySelector('.popup-photo');
  const photoButton = document.querySelector('.popup-photo__close');
  
  function openPhoto () {
  photo.classList.add('popup-photo__opened');
  photo.removeEventListener('click', openPhoto);
}
function closePhoto() {
  photo.classList.remove('popup-photo__opened')
}
photoButton.addEventListener('click', closePhoto); 

//Удаляем карточку
placeElement.querySelector('.place__button-delete').addEventListener('click',function(evt){
  evt.target.closest('.place').remove();
});
//Создаем лайк для кнопки
placeElement.querySelector('.place__button').addEventListener('click',function(evt){
  evt.target.classList.toggle('place__button_active');
})
return placeElement;
};
const renderPlaceItem = (item, container) => {
  container.append(createPlaceItem(item))
};
initialCards.forEach(item => renderPlaceItem(item, cardsContainer));

//Добавляем новую карточку в контейнер
function addCard(cardsContainer,placeElement){
  cardsContainer.prepend(placeElement)
  }
initialCards.forEach(createPlaceItem)

// Выбираем переменные для добавления карточки
const addButton = document.querySelector('.profile__add-button')
const popupCards = document.querySelector('.popup-cards');
const cardSubmit = document.querySelector('.popup-cards__submit');
const CloseButton = document.querySelector('.popup-cards__close');
const deleteNewCard = document.querySelector('.place__button-delete')
const cardForm = document.querySelector('.popup-cards__form')

//Создаем форму для добавления новой карточки 
function showPopupCards() {
  popupCards.classList.add('popup-cards_opened');
  popupCards.removeEventListener('click', showPopupCards);
  }
  function closePopupCards() {
  popupCards.classList.remove('popup-cards_opened')
  }
  
  addButton.addEventListener('click', showPopupCards);
  CloseButton.addEventListener('click', closePopupCards);


// Добавляем карточку в контейнер через форму
const textField=popupCards.querySelector('.popup-cards__input_type_text')
const linkField=popupCards.querySelector('.popup-cards__input_type_link')

function createForm(event) {
  event.preventDefault();
  createPlaceItem(linkField,textField)
  addCard(cardsContainer, createPlaceItem(textField,linkField))
  document.querySelector('.place__image').src=linkField.value
  document.querySelector('.place__text').textContent=textField.value
  closePopupCards();
  cardForm.reset()
  }
  cardForm.addEventListener('submit', createForm);

  

    


      