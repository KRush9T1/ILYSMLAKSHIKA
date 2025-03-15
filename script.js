// Create a better-looking heart shape with emojis
const heart = [
    '    ❤️❤️  ❤️❤️    ',
    '  ❤️          ❤️  ',
    '❤️              ❤️',
    '❤️              ❤️',
    '  ❤️          ❤️  ',
    '    ❤️      ❤️    ',
    '      ❤️  ❤️      ',
    '        ❤️        '
];

document.getElementById('heart').textContent = heart.join('\n');

// Create twinkling stars effect
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = Math.min(window.innerWidth / 3, 100); // Responsive star count

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${1 + Math.random() * 3}s infinite`;
        starsContainer.appendChild(star);
    }
}

// Handle viewport height for mobile browsers
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Initialize
window.addEventListener('resize', setVH);
setVH();
createStars();
setTimeout(() => {
    document.querySelector('.container').classList.add('visible');
}, 100);