
// lob.js - Simple LOB plotting on HTML canvas

// Each LOB: { lat, lon, bearingDegrees }
const lobs = [
  { lat: 38.9072, lon: -77.0369, bearing: 45 },   // Washington DC example
  { lat: 39.2904, lon: -76.6122, bearing: 120 },  // Baltimore
  { lat: 38.8048, lon: -77.0469, bearing: 300 }   // Alexandria VA
];

function toCanvasCoords(lat, lon, width, height) {
  // Simplified projection for demo purposes
  const scale = 10000;
  const x = width / 2 + (lon + 77) * scale;
  const y = height / 2 - (lat - 39) * scale;
  return {x, y};
}

function drawLOBs() {
  const canvas = document.getElementById('lobCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  lobs.forEach(lob => {
    const start = toCanvasCoords(lob.lat, lob.lon, canvas.width, canvas.height);
    const length = 200; // arbitrary line length
    const angleRad = lob.bearing * Math.PI / 180;

    const end = {
      x: start.x + length * Math.cos(angleRad),
      y: start.y - length * Math.sin(angleRad)
    };

    // Draw point
    ctx.beginPath();
    ctx.arc(start.x, start.y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();

    // Draw line
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();
  });
}

window.onload = drawLOBs;
