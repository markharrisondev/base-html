// Get canvas and button elements
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const button = document.getElementById('myButton');

// Initialize canvas with a simple drawing
function initCanvas() {
    // Set canvas background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw a welcome message
    ctx.fillStyle = '#ffffff';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Canvas Ready', canvas.width / 2, canvas.height / 2);
}

// Button click event handler
button.addEventListener('click', function() {
    // Clear canvas and redraw
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw a random colored circle
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 50 + 20;
    const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
});

// Initialize canvas on page load
initCanvas();
