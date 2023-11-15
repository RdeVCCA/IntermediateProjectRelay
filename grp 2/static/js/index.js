document.addEventListener('keydown', function(event) {
    const container = document.getElementById('container');
    let currentRotation = parseFloat(container.style.transform.replace(/[^\d.]/g, '')) || 0;

    if (event.key === 'O') {
        currentRotation -= 10; // rotate anti-clockwise
    } else if (event.key === 'L') {
        currentRotation += 10; // rotate clockwise
    }

    container.style.transform = `rotate(${currentRotation}deg)`;
});
