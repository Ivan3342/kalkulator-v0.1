const display = document.getElementById("display");
const buttons = document.getElementsByClassName("dugme");
const jednako = document.getElementById("jednako");
const obrisi = document.getElementById("obrisi");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        display.value += buttons[i].innerHTML;
    })
}

jednako.addEventListener('click', () => {
    display.value = eval(display.value);
})

obrisi.addEventListener('click', () => {
    display.value = "";
})