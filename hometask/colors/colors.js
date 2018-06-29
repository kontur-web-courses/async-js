function Color (colorName) {
    this.colorName = colorName;

    this.render = function(container) {
        var colorSpan = document.createElement('span');
        colorSpan.classList.add('color');

        colorSpan.textContent = this.colorName;

        colorSpan.addEventListener('mouseover', this._mouseoverHandler);
        colorSpan.addEventListener('mouseout', this._mouseoutHandler);

        container.appendChild(colorSpan);
        var space = document.createTextNode(' ');
        container.appendChild(space);
    };


    this._mouseoverHandler = function (event) {
        this.style.color = event.target.textContent;
    };

    this._mouseoutHandler = function () {
        this.style.color = null;
    };
}

function renderColors () {
    var colorNames = ['red', 'violet', 'yellow', 'aqua', 'salmon', 'white', 'blue', 'gray', 'black', 'darkred',
        'orange', 'deeppink', 'indigo', 'coral', 'lightgray', 'lime', 'cyan', 'green'];
    var container = document.getElementsByClassName('colors')[0];

    colorNames.forEach(function (colorName) {
        var color = new Color(colorName);
        color.render(container);
    });

    container.addEventListener('click', clickHandler);
}

function clickHandler (event) {
    if (event.target.tagName.toLowerCase() !== 'span') {
        return;
    }
    this.style.color = event.target.textContent;
};

renderColors();
