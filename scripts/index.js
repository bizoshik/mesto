/* Модалка редактирования профиля */

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

/* Карточки мест */

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cards = document.querySelector(".elements");

const cardsElements = initialCards.map(({ name, link }) => {
  const card = document.createElement("article");
  card.classList.add("elements__element");

  const cardImage = document.createElement("img");
  cardImage.classList.add("elements__image");
  cardImage.src = link;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("elements__info");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("elements__title");
  cardTitle.textContent = name;

  const cardButton = document.createElement("button");
  cardButton.classList.add("elements__like-button");

  cardInfo.append(cardTitle, cardButton);
  card.append(cardImage, cardInfo);

  return card;
});

cards.append(...cardsElements);
