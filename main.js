let noCount = 0;

function answerYes() {
    if (noCount === 0) {
        document.getElementById("result").innerHTML = `
            <p>І Я КОХАЮ ТЕБЕЕЕЕ ❤️</p>
            <img src="our_photo.jpg" width="200">
        `;
    } else {
        document.getElementById("result").innerHTML = `
            <p>I don't believe you 😏</p>
        `;
        reset();
    }
}

function moveNoButton() {
    const button = document.getElementById("noBtn");

    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "fixed";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}