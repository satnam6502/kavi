function drawGrid(canvas) {
    // Set the line width and color
    canvas.lineWidth = 1;
    canvas.strokeStyle = 'cyan';

    // Draw horizontal lines
    for (let i = 0; i <= 10; i++) {
    canvas.beginPath();
    canvas.moveTo(0, i * 100);
    canvas.lineTo(1000, i * 100);
    canvas.stroke();
    }

    // Draw vertical lines
    for (let i = 0; i <= 10; i++) {
    canvas.beginPath();
    canvas.moveTo(i * 100, 0);
    canvas.lineTo(i * 100, 1000);
    canvas.stroke();
    }

    // Draw text on x axis
    for (let i = 0; i <= 10; i++) {
        canvas.fillText(i*100, i * 100 + 10, 10);
    }


    // Draw text on y axis
    for (let i = 1; i <= 10; i++) {
        canvas.fillText(i * 100, 10,  i * 100 + 10);
        }

}

// Draw a tree trunk at position (x, y)
function trunk(x, y) {
    canvas.fillStyle = "brown";
    canvas.fillRect(x, y, 100, 600);   
}

// Draw a right leaf a position (x, y)
function leaf(x, y) {
    canvas.fillStyle = "green"; // Draw a green leaf
    canvas.beginPath(); // Start a path to define the slanted shape of the leaf.
    canvas.moveTo(x, y); // Mark the four corners of the leaf.
    canvas.lineTo(x+30, y+100);
    canvas.lineTo(x+40, y+100);
    canvas.lineTo(x+10, y);
    canvas.fill(); // Fill in the leaf with green.
    canvas.closePath(); // Close the path for the leaf.
}

// Get the canvas element
var drawing = document.getElementById('drawing');
var canvas = drawing.getContext('2d');

// First draw a blue grid to help us positions things on the canvas.
drawGrid(canvas);

// Tree trunk
trunk(100, 300);

// Right leaf
leaf(100, 100);

// Pointy top of tree
canvas.fillStyle = "brown";
canvas.beginPath();
canvas.moveTo(400, 100);
canvas.lineTo(450, 9);
canvas.lineTo(500, 100);
canvas.lineTo(400, 100);
canvas.fill();
canvas.closePath();

