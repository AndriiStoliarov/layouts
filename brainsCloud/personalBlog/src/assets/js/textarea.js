/* Автоматическое увеличение поля ввода при наполнении его текстом. */

const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
    // offsetHeight – внешняя высота блока учитывая ширину,
    // внутренние отступы и рамоку.
    let textAreaH = item.offsetHeight;

    item.addEventListener('input', event => {
        let $this = event.target;

        $this.style.height = textAreaH + 'px';
        // Свойство scrollHeight хранит полную высоту поля с прокручиваемой частью.
        $this.style.height = $this.scrollHeight + 'px';
    });
});