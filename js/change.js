let images = ['./img/fort.jpg', "./img/schtrouphette.jpg", "./img/schtroumpfs.jpg", "./img/chanteur.jpg"
]

let indexVoiture = 0;
document.querySelector('#gauche').addEventListener('click', function () {
    indexVoiture--;
    if (indexVoiture < 0) {
        indexVoiture = images.length - 1;
    }

    document.querySelector('#img-change').src = images[indexVoiture];

})

document.querySelector('#droite').addEventListener('click', function () {
    indexVoiture++;

    if (indexVoiture > images.length - 1) {
        indexVoiture = 0;
    }

    document.querySelector('#img-change').src = images[indexVoiture];
})


let count = 0;
let imagesStroumph = ['./img/fort.jpg', "./img/schtrouphette.jpg", "./img/schtroumpfs.jpg", "./img/chanteur.jpg"
]

setInterval(() => {
    count++;

    if(count == imagesStroumph.length - 1){
        count = 0
    }

    document.querySelector('#banniere-img').src = imagesStroumph[count];
}, 3000)


/* Exercice 1 : Fonctions de base
Écris une fonction appelée greet qui prend un argument name et affiche dans la console "Bonjour, [name]!" où [name] est l'argument passé à la fonction. Par exemple, greet('Alice') devrait afficher "Bonjour, Alice!".

Exercice 2 : Boucles for
Écris une boucle for qui affiche les nombres de 1 à 10 dans la console. Assure-toi que chaque nombre soit affiché sur une nouvelle ligne.

Exercice 3 : Fonctions et Boucles
Crée une fonction appelée printNumbers qui prend un argument n et utilise une boucle for pour afficher tous les nombres de 1 à n dans la console. Par exemple, printNumbers(5) devrait afficher les nombres de 1 à 5.

Exercice 4 : Écouteurs d'événements
Écris du code JavaScript qui ajoute un écouteur d'événement de clic à un bouton avec l'ID myButton. Quand le bouton est cliqué, affiche une alerte avec le message "Bouton cliqué !".*/
