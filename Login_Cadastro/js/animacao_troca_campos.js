var content = document.querySelectorAll('.ani_entra');
var content2 = document.querySelectorAll('.ani_antes');
var content3 = document.querySelectorAll('.ani_antes2');
var content4 = document.querySelectorAll('.ani_antes3');

const switchANI = document.querySelectorAll(".cadastro");
const switchANI2 = document.querySelectorAll(".continuar");
const switchANI3 = document.querySelectorAll(".continuar2");
const switchANI4 = document.querySelectorAll(".login");

function clickEvent(event) {
    content.forEach(function(element) {
        element.classList.add('ani_sai');
    });

    content2.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
}
function clickEvent2(event) {
    content2.forEach(function(element) {
        element.classList.add('ani_sai');
    });

    content3.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
}
function clickEvent3(event) {
    content3.forEach(function(element) {
        element.classList.add('ani_sai');
    });

    content4.forEach(function(element) {
        element.classList.add('ani_entra');
        element.classList.remove('ani_sai');
    });
}
function clickEvent4(event) {
    content2.forEach(function(element) {
        if (element.classList.contains('ani_entra')) {
            element.classList.add('ani_sai')
        }
    });
    content3.forEach(function(element) {
        if (element.classList.contains('ani_entra')){
            element.classList.add('ani_sai')
        }
    });
    content4.forEach(function(element) {
        if (element.classList.contains('ani_entra')){
            element.classList.add('ani_sai')
        }
    });
    content.forEach(function(element) {
        if (element.classList.contains('ani_sai')){
            element.classList.remove('ani_sai');
        }
    });
}


switchANI.forEach((button) => {
    button.addEventListener("click", clickEvent);
});
switchANI2.forEach((button) => {
    button.addEventListener("click", clickEvent2);
});
switchANI3.forEach((button) => {
    button.addEventListener("click", clickEvent3);
});
switchANI4.forEach((button) => {
    button.addEventListener("click", clickEvent4);
});
    