const text = "Team Taiwan! Team Taiwan! Taiwan is a great country!";
const textContainer = document.getElementById('text-container');

// Split the string into characters and wrap each character in a span
text.split('').forEach(char => {
    const span = document.createElement('span');
    span.className = 'fade-text';
    span.textContent = char;
    textContainer.appendChild(span);
});

// Select all character elements
const chars = document.querySelectorAll('.fade-text');

// Animate each character with flying in from a 75-degree angle
chars.forEach((char, index) => {
    gsap.to(char, {
        opacity: 1,
        y: -30, // Move up by 30 pixels
        x: -25,
        rotationX: 0, // Rotate to standing position
        duration: 0.5,
        delay: index * 0.02, // Start each character slightly earlier
        ease: "power2.out",
        start: { 
            rotationX: -90, // Start from 75 degrees
            y: 20,
            x: 15
        }
    });
});
