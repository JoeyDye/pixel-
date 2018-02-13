const colorPicker = document.getElementById('color-picker');
const canvasTitle = document.getElementById('canvas_title');
const submit = document.querySelector('input[type="submit"]');
const reset = document.querySelector('input[type="reset"]');
let color;
let tr;
let td;
let table;
let gridHeight;
let gridWidth;
let tableDataElements;

// Make grid

function makeGrid() {

  table = document.createElement('TABLE');
  canvasTitle.after(table);

  for (let i = 0; i < gridHeight; i++) {
    tr = document.createElement('TR')
    table.appendChild(tr);
      for (let i = 0; i < gridWidth; i++) {
        td = document.createElement('TD');
        tr.appendChild(td);
      }
    }

// Add color to selected target

    table.addEventListener('click', function (evt) {
      if (evt.target.nodeName === 'TD') {
        evt.target.style.backgroundColor = color;
      }
    });
  }

function clearCanvas() {
  tableDataElements = document.querySelectorAll('td');
  for (i = 0; i < tableDataElements.length; i++) {
    tableData = tableDataElements[i];
    tableData.style.backgroundColor = '';
  }
}

// Store color picker value

colorPicker.addEventListener('change', function () {
  color = colorPicker.value;
})

// Select size input

submit.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (gridHeight > 0) {
    table.remove();
    }


  gridHeight = Number(document.getElementById('input_height').value);
  gridWidth = Number(document.getElementById('input_width').value);

  makeGrid();
});

// Clear canvas

reset.addEventListener('click', function (evt) {
  evt.preventDefault();
  clearCanvas();
});

