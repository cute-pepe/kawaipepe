function nextPage() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
    createHearts();
}

// Function to scroll down in the love letter
function scrollDown() {
    document.querySelector('.love-letter').scrollBy({
        top: 300, // Adjust scroll amount
        behavior: 'smooth'
    });
}

function createHearts() {
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement('div');
        heart.className = 'hearts';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000); // Remove hearts after 5 seconds
    }
}
