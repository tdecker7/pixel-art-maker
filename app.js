document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.querySelector('.canvas'),
    palette = document.querySelector('.palette'),
    selectedColor = 'black',
    colors = [
        'black', 'white', 'red', 'green', 'blue', 
        'brown', 'yellow', 'purple', 'pink', 'grey'];

    buildPaintCanvas(50, 50, canvas);
    buildColorPalette(colors, palette);
    canvas.addEventListener('click', (event) => {
        if (isPixel(event.target)) {
            changeColor(event.target, selectedColor);
        }
        
    });
})

function buildPaintCanvas(rows, columns, target) {
    for (var y = 0; y < rows; y++) {
        var row = document.createElement('div', { 'className': 'row'});
        row.className = 'row';
        target.appendChild(row);
        for (var x = 0; x < columns; x++) {
            var pixel = document.createElement('div');
            pixel.className = `pixel_${x}_${y}`;
            row.appendChild(pixel);
        }
    }
}
function buildColorPalette(colors, target) {
    for (var color in colors) {
        var palettePixel = document.createElement('div');
        palettePixel.className = 'palette-pixel';
        palettePixel.style.backgroundColor = colors[color];
        target.appendChild(palettePixel);
    }
}
function isPixel(target) {
    if (target.className.match(/pixel/g)) {
        return true;
    }
    return false;
}

function changeColor(target, color) {
    target.style.backgroundColor = color;
}