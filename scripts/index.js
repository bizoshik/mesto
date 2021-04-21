let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");

function togglPopup() {
  let isOpen = popup.classList.contains("popup_visible");

  if (isOpen) {
    popup.classList.remove("popup_visible");
  } else {
    popup.classList.add("popup_visible");
  }
}

editButton.addEventListener("click", togglPopup);
popupClose.addEventListener("click", togglPopup);
