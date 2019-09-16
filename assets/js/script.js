const pressed = [];
const secretCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
    "Enter"
];

window.addEventListener("keyup", e => {
    pressed.push(e.key);
    pressed.splice(0, pressed.length - secretCode.length);
    if (pressed.join(", ") === secretCode.join(", ")) {
      alert("Well done!");
      cornify_add();
    }
});

alert("Type the secret code for a surprise!");
