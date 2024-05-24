var content = document.querySelectorAll('.ani_antes');

const switchANI = document.querySelectorAll(".aviso");
const switchANI2 = document.querySelectorAll(".ani_antes");

function clickEvent(event) {
    content.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
}
function clickEvent2(event) {
    content.forEach(function(element) {
        element.classList.add('ani_sai');
});
}


switchANI.forEach((button) => {
    button.addEventListener("click", clickEvent);
});
switchANI2.forEach((button) => {
    button.addEventListener("click", clickEvent2);
});