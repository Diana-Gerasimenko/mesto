const validationList={
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
  }; 

//Показать ошибку
 function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
}
//Скрыть ошибку, если данные валидны
function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
}
//Проверить корректность введенных данных
function checkInputValidity(form, input, config) {
    if (!input.validity.valid) {
        showError(form, input, config);
    } else {
        hideError(form, input, config);
    }
}
//Изменение кнопки в зависимости от валидности данных
function validityButton(button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = true; 
    }
}
function setEventListeners(form, config) {
    const inputs = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        checkInputValidity(form, input, config); //Вызвать функцию проверки введенных данных
        validityButton(submitButton, form.checkValidity(), config);
    });
});
}
//Создаем валидацию для всех форм
function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        setEventListeners(form, config);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            console.log('отправить форму');
        });
        const submitButton = form.querySelector(config.submitButtonSelector);
        validityButton(submitButton, form.checkValidity(), config)
    });
}

enableValidation(validationList);