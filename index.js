const containnerEl = document.querySelector(".container")

const textOptions = ["Engineer", "Programmer", "Web Developer", "Video Editor", "Learner"]

let optIndex = 0

let charIndex = 0

updateText()

function updateText() {
    containnerEl.innerHTML =
    `
    <h1>I am ${["a", "e", "i", "o", "u"].includes(textOptions[optIndex].slice(0, 1).toLowerCase()) ? "an" : "a"} ${textOptions[optIndex].slice(0, charIndex)}</h1>
    `;
    charIndex++;
    if (charIndex > textOptions[optIndex].length) {
        charIndex = 0
        optIndex++
        if (optIndex === textOptions.length) {
            optIndex = 0
        }
    }
    setTimeout(updateText, 150)
}
