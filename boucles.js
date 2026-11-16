let n=0; //cree une variable n pour une valeur de 0

n =n+1; //on ajoute 1 a n (n+1)
console.log(n); //on affiche (n) dans la console
n=n+1;
/*
Tant que i est < 10
    ajouter 1 a i
    afficher i
fin tant que

/ Vérifier si un N° de CB est valide


4111-1111-1111-1111 : Pas valide car il y a des tirets
4111 1111 1111 111 : Pas valide car il manque il digit
4111 1111 1111 1112 : Pas valide car le dernier digit est incorrect
5555 5555 5555 4434 : Pas valide car un digit est incorrect
4111 1111 1111 1111 : Valide
5555 5555 5555 4444 : Valide

Algorithme de Luhn pour vérifier la validité d'un numéro de carte bancaire

Parcourir de droite à gauche
Doubler la valeur un chiffre sur deux, en commençant par le deuxième
Si un chiffre doublé est supérieur à 9, soustraire 9
Faire la somme de tous les chiffres
Si le total est un multiple de 10, le numéro est valide
*/


let c = 'abcdefgh'; // Chaîne de caractères

// Lecture de chaque caractère de la chaîne
for (let i = 0; i < c.length; i++) {
    console.log(c.substring(i, i + 1));
}

// Lecture de chaque caractère de la chaîne depuis la fin
for (let i = 7; i >= 0; i--) {
    console.log(c.substring(i, i + 1));
}




let numero = "4111 1111 1111 1111";
let valide = true;

// 1. Vérifier le format
if (numero.length != 19) {
    valide = false;
}

for (let i = 0; i < 19; i++) {

    if (i == 4 || i == 9 || i == 14) {
        if (numero[i] != " ") {
            valide = false;
        }
    } else {
        if (numero[i] < "0" || numero[i] > "9") {
            valide = false;
        }
    }
}

// 2. Vérifier le numéro avec Luhn
if (valide == true) {

    let somme = 0;
    let doubler = false;

    for (let i = 18; i >= 0; i--) {

        if (numero[i] != " ") {

            let chiffre = Number(numero[i]);

            if (doubler == true) {
                chiffre = chiffre * 2;

                if (chiffre > 9) {
                    chiffre = chiffre - 9;
                }
            }

            somme = somme + chiffre;
            doubler = !doubler;
        }
    }

    // 3. Afficher le résultat
    if (somme % 10 == 0) {
        console.log("Numéro valide");
    } else {
        console.log("Numéro invalide");
    }

} else {
    console.log("Format incorrect");
}
