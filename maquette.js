const slide = ["6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero > 5)
    numero = 0;
    if (numero < 0)
    numero = 5;
    document.getElementById('slide').src = "assets/" + slide[numero];

    const dot = document.getElementsByClassName('dot');

    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }

    dot[numero].classList.add('active');
}   

// setInterval("ChangeSlide(1)", 4000); # image qui ce charge tout seul