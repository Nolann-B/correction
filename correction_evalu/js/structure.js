// Changement de l'image 

let images = ['../img/background.jpg', '../img/background2.jpg', '../img/background3.jpg'];

let count = 0;

setInterval(() => {
    document.querySelector('header').style.backgroundImage = "url(" + images[count] + ")";

    count++;

    if (count == images.length) {
        count = 0;
    }
}, 15000);

document.querySelector('#menu').addEventListener('click', function () {
    document.querySelector('#menu-div').classList.toggle('show');
})


// Partie voiture

let tab = ["../img/vehicule1.png", "../img/vehicule2.png", "../img/vehicule3.png", "../img/vehicule4.png"];

let counter = 0;

document.querySelectorAll(".left").forEach(function (left) {
    left.addEventListener('click', function () {

        if (counter == 0) {
            counter = tab.length;
        }

        // if(counter < 0){
        // counter = tab.length - 1}
        counter--;

        left.parentElement.querySelector('div').querySelector('img').src = tab[counter]

    })
})

document.querySelectorAll('.right').forEach(function (droite) {

    droite.addEventListener('click', function () {
        if(counter >= tab.length - 1){
            counter = 0;
        }

        counter++;
        droite.parentElement.querySelector('div').querySelector('img').src = tab[counter]
    })
})