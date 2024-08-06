const closeButton = document.querySelector('.close');
const modal = document.querySelector('.modal');
const cancelAndSubmit = document.querySelectorAll('.btn-action');
const buttonModal = document.querySelector('.button-modal');

const modalHidden = document.querySelector('.modal-hidden');

function hiddenModal() {
    return modal.style.display = 'none';
}

buttonModal.addEventListener('click', () => {
    if (modalHidden.style.display !== 'flex') {
         modalHidden.style.display = 'block'
    }
});


closeButton.addEventListener('click', () => {
    hiddenModal();
});

cancelAndSubmit.forEach((btn) => {
    btn.addEventListener('click', () => {
        hiddenModal();
    });
})

document.addEventListener('click', () => {
    hiddenModal();
});
