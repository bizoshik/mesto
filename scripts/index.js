/* Общие элементы */

const cards = document.querySelector(".elements");

/* Модалка редактирования профиля */

let profileName = document.querySelector(".profile__title");
let profileDescription = document.querySelector(".profile__subtitle");
let profileEditButton = document.querySelector(".profile__edit-button");

let profileEditPopup = document.querySelector("#profile-edit-popup");
let profileEditPopupCloseButton = document.querySelector(
  "#profile-edit-popup .popup__close"
);
let profileEditPopupForm = document.querySelector(
  "#profile-edit-popup .popup__form"
);
let profileEditPopupNameInput = document.querySelector(
  "#profile-edit-popup .popup__input[name=name]"
);
let profileEditPopupDescriptionInput = document.querySelector(
  "#profile-edit-popup .popup__input[name=description]"
);

profileEditButton.addEventListener("click", openPopup);
profileEditPopupCloseButton.addEventListener("click", closePopup);
profileEditPopupForm.addEventListener("submit", submitPopup);

function submitPopup(event) {
  event.preventDefault();
  profileName.textContent = profileEditPopupNameInput.value;
  profileDescription.textContent = profileEditPopupDescriptionInput.value;
  closePopup();
}

function openPopup() {
  profileEditPopupNameInput.value = profileName.textContent;
  profileEditPopupDescriptionInput.value = profileDescription.textContent;
  profileEditPopup.classList.add("popup_visible");
}

function closePopup() {
  profileEditPopup.classList.remove("popup_visible");
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

const cardsElements = initialCards.map(({ name, link }) =>
  createCard(name, link)
);

cards.append(...cardsElements);

/* Модалка добавления новых карточек */

let cardAddButton = document.querySelector(".profile__add-button");

let cardAddPopup = document.querySelector("#card-add-popup");
let cardAddPopupCloseButton = document.querySelector(
  "#card-add-popup .popup__close"
);
let cardAddPopupForm = document.querySelector("#card-add-popup .popup__form");
let cardAddPopupNameInput = document.querySelector(
  "#card-add-popup .popup__input[name=card-name]"
);
let cardAddPopupImageLinkInput = document.querySelector(
  "#card-add-popup .popup__input[name=image-link]"
);

cardAddButton.addEventListener("click", openAddPopup);
cardAddPopupCloseButton.addEventListener("click", closeAddPopup);
cardAddPopupForm.addEventListener("submit", createPopup);

function openAddPopup() {
  cardAddPopup.classList.add("popup_visible");
}

function closeAddPopup() {
  cardAddPopupNameInput.value = "";
  cardAddPopupImageLinkInput.value = "";
  cardAddPopup.classList.remove("popup_visible");
}

function createPopup(event) {
  event.preventDefault();
  const cardElement = createCard(
    cardAddPopupNameInput.value,
    cardAddPopupImageLinkInput.value
  );
  cards.prepend(cardElement);
  closeAddPopup();
}

/* Общие функции */

function createCard(name, imgSrc) {
  const card = document.createElement("article");
  card.classList.add("elements__element");

  const cardImage = document.createElement("img");
  cardImage.classList.add("elements__image");
  cardImage.src = imgSrc;

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
}
