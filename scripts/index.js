let profileName = document.querySelector(".profile__title");
let profileDescription = document.querySelector(".profile__subtitle");
let profileEditButton = document.querySelector(".profile__edit-button");

let popup = document.querySelector(".popup");
let popupCloseButton = document.querySelector(".popup__close");
let popupForm = document.querySelector(".popup__form");
let popupNameInput = document.querySelector(".popup__input[name=name]");
let popupDescriptionInput = document.querySelector(
  ".popup__input[name=description]"
);

profileEditButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);
popupForm.addEventListener("submit", submitPopup);

function submitPopup(event) {
  event.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileDescription.textContent = popupDescriptionInput.value;
  closePopup();
}

function openPopup() {
  popupNameInput.value = profileName.textContent;
  popupDescriptionInput.value = profileDescription.textContent;
  popup.classList.add("popup_visible");
}

function closePopup() {
  popup.classList.remove("popup_visible");
}
