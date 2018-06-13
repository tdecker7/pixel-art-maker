document.addEventListener('DOMContentLoaded', () => {
    var canvas = document.querySelector('.canvas');

    buildPaintCanvas(50, 50, canvas);
    console.log(canvas);
})

function buildPaintCanvas(rows, columns, target) {
    for (var y = 0; y < rows; y++) {
        var row = document.createElement('div', { 'className': 'row'});
        console.dir(row);
        row.className = 'row';
        target.appendChild(row);
        for (var x = 0; x < columns; x++) {
            var pixel = document.createElement('div');
            pixel.className = `pixel_${x}`;
            row.appendChild(pixel);
        }
    }
}