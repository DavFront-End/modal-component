const btnModal = document.querySelector(".button-modal");
const modalHidden = document.querySelector(".modal-hidden");
const btnClose = document.querySelector(".close");
const btnCancel = document.querySelector(".cancel");
const btnSubmit = document.querySelector(".submit");

function showModal() {
  modalHidden.style.display = "block";
}

function hiddenModal() {
  modalHidden.style.display = "none";
}

function hiddenButton() {
  btnModal.style.display = "none";
}

function showButton() {
  btnModal.style.display = "block";
}

btnModal.addEventListener("click", () => {
  showModal();
  hiddenButton();
});

btnClose.addEventListener("click", () => {
  hiddenModal();
  showButton();
});

btnCancel.addEventListener("click", () => {
  hiddenModal();
  showButton();
});

btnSubmit.addEventListener("click", () => {
  hiddenModal();
  showButton();
});

document.addEventListener("click", (e) => {
  if (e.target.className === 'container') {
    hiddenModal();
    showButton();
  }
});
