const canvasMain = document.getElementById('MainField');
const ctxMain = canvasMain.getContext('2d');
ctxMain.strokeStyle = 'black';
ctxMain.lineWidth = 0.5;

const canvasData = document.getElementById('DataField');
const ctxData = canvasData.getContext('2d');


const fontSize = 16;
const fontStyle = "Arial";
const textColor = "black";

// Set font properties
// ctx.font = `${fontSize}px ${fontStyle}`;
// ctx.fillStyle = textColor;

// new GameField(1, 1, 100).draw(ctxMain, 500, 250);

for (var row = 1; row <= 13; row++)
   for (var index = 1; index <= 7 + (row % 2 == 0 ? 0 : 1); index++)
      new GameField(row, index, 30).draw(ctxMain);

// const textHeight = fontSize;
  const textElement = document.createElement('span');
  textElement.id = "mouse-position"; // Optional: Set an ID for styling
  textElement.style.position = "absolute";
  textElement.style.backgroundColor = "red"; // Optional: customize background color
  textElement.style.padding = "5px"; // Optional: customize padding
  textElement.style.border = "1px solid black"; // Optional: add a border
        
  // Append the text element to the body
  document.body.appendChild(textElement);


// Define a function to draw a single floating text element
document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    ctxData.clearRect(50, 0, 150, 50); // Clear the canvas
    ctxData.fillText(`X: ${x}, Y: ${y}`, 50, 30); 
    
    textElement.textContent = `X: ${x}, Y: ${y}`;

    // Update the position of the text element
    textElement.style.left = `${x + 10}px`; // Offset by 10px from the cursor (adjust as needed)
    textElement.style.top = `${y + 10}px`;
  });
  

