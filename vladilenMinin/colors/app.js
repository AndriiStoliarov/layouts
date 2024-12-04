const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    // текстовое значение нажатой кнопки приводит к строчному регистру и строгим равенством сравниваем.
    if (event.code.toLocaleLowerCase() === 'space') {
        setRandomColors();
    };
});

document.addEventListener('click', (event) => {
    // доступ к data-атрибутам с помощью свойства dataset.
    const type = event.target.dataset.type;
    // для срабатывания клика по кнопке и иконке.
    if (type === 'lock') {
        const node = 
            event.target.tagName.toLocaleLowerCase() === 'i' 
                ? event.target 
                : event.target.children[0];

        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock');
    } else if (type === 'copy') {
        // свойство textContent предоставляет доступ к тексту внутри элемента за вычетом всех тегов.
        copyToClickboard(event.target.textContent);
    }
});

// not used
function generateRandomColor() {
    // RGB
    // #FF0000 = RED
    // #00FF00 = GREEN
    // #0000FF = BLUE
    
    // шестнадцатиричный алфавит.
    const hexCodes = '0123456789ABCDEF';
    let color = '';
    // формируем строку из 6 случайных символов.
    for (let i = 0; i < 6; i++) {
        // сгенерированное случайное число умножаем на длину алфавита с последующим округлением до целого.
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
    }
    // добавляем символ # в начало строки, что бы строка соответствовала шестнадцатиричному формату цвета.
    return '#' + color;
};


function copyToClickboard(text) {
    // navigator дочерний объект объекта window, содержащий информацию о браузере.
    // navigator.clipboard – объект Clipboard для чтения и записи данных из буфера обмена.
    // writeText() метод объекта Clipboard – записывает текст в буфер обмена.
    return navigator.clipboard.writeText(text);
}


function setRandomColors(isInitial) {
    // проверяем если это первоначальная загрузка isInitial = true, тогда забераем цвета из хеша.
    const colors = isInitial ? getColorsFromHash() : [];

    cols.forEach((col, index) => {
        // проверяем если замок закрыт, цвет заблокирован.
        const isLocked = col.querySelector('i').classList.contains('fa-lock');
        const text = col.querySelector('h2');
        const button = col.querySelector('button');

        if (isLocked) {
            // если цвет заблокирован, то берем его от туда где он и находится из text.
            colors.push(text.textContent);
            return;
        }

        // const color = generateRandomColor();
        // если это первичная загрузка значит получаем цвета из массива уже сформированного colors.
        const color = isInitial
            ? colors[index]
                // проверяем если в хеше и в массиве colors нет цветов.
                ? colors[index]
                : chroma.random()
            : chroma.random();

        // проверяем если загрузка не первоначальная.
        if (!isInitial) {
            // если цвет не заблокирован, то берем сгенерированный цвет color.
            colors.push(color);
        }

        text.textContent = color;
        col.style.background = color;

        setTextColor(text, color);
        setTextColor(button, color);
    });

    updateColorsHash(colors);
}


function setTextColor(text, color) {
    // luminance() возвращает уровень яркости цвета от 0 до 1.
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
}


function updateColorsHash(colors = []) {
    // с помощью метода join() собираем массив в строку по разделителю.
    document.location.hash = colors.map((col) => {
        return col.toString().substring(1);
    }).join('-');
}


function getColorsFromHash() {
    // location.hash - хеш URL адреси.
    if (document.location.hash.length > 1) {
        // с помощью метода split() разбиваем строку на массив по разделителю.
        return document.location.hash
            .substring(1)
            .split('-')
            .map(color => '#' + color);
    }
    return [];
}

setRandomColors(true);