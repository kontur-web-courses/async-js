class Color {
    constructor (colorName) {
        this.colorName = colorName;
    }

    render (container) {
        const colorSpan = document.createElement('span');
        colorSpan.classList.add('color');

        colorSpan.textContent = this.colorName;

        colorSpan.addEventListener('mouseover', this._mouseoverHandler);
        colorSpan.addEventListener('mouseout', this._mouseoutHandler);

        container.appendChild(colorSpan);
        const space = document.createTextNode(' ');
        container.appendChild(space);
    };


    _mouseoverHandler = (event) => {
        event.target.style.color = this.colorName;
    };

    _mouseoutHandler = (event) => {
        event.target.style.color = null;
    };
}

function renderColors () {
    const colorNames = ['red', 'violet', 'yellow', 'aqua', 'salmon', 'white', 'blue', 'gray', 'black', 'darkred',
        'orange', 'deeppink', 'indigo', 'coral', 'lightgray', 'lime', 'cyan', 'green'];
    const container = document.getElementsByClassName('colors')[0];

    for (const colorName of colorNames) {
        const color = new Color(colorName);
        color.render(container);
    }

    container.addEventListener('click', clickHandler);
}

function clickHandler (event) {
    if (event.target.tagName.toLowerCase() !== 'span') {
        return;
    }
    this.style.color = event.target.textContent;
};

renderColors();
