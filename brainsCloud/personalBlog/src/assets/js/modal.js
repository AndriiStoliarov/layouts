const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');


// вызов модального окна
modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        const modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            // The stopPropagation() method prevents bubbling up to parent elements. Клик, по дочерним элементам нашего окна, не будет вызывать данное событие у родителя.
            event.stopPropagation();
        });

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(() => {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 1);
    });
});

// закрытие модального окна "крестиком"
modalClose.forEach(item => {
    item.addEventListener('click', event => {
        // The closest() method find the closest element and its parents
        let currentModal = event.currentTarget.closest('.modal');

        closeModal(currentModal);
    });
});

// закрытие модального окна кликом на маску
modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;

        closeModal(currentModal);
    });
});

function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style');

    setTimeout(() => {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 200);
}