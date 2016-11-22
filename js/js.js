// ---------<< Début du Javascript >>---------

console.log("Début du JS");

document.getElementById("chofroa").innerHTML = "A vous de jouer !";

// -----< Compteur >-----

var compteur = 0;

// ---------<< Valeur choisie par l'IA >>---------

var rng = Math.floor(Math.random()*101);

console.log("Valeur choisie par l'IA : " + rng);

// ---------<< Formulaire >>---------

// -----< Fonction >-----

function number() {

	// -----< Valeur choisie par l'utilisateur >-----

	var nombre = document.getElementById("formulaire").elements[0].value;

	console.log("Nombre entré par l'utilisateur : " + nombre);

	// -----< Différence "rng" et "nombre" >-----

	var substract = Math.abs(rng - nombre);

	// -----< Conditions et résultats >-----

	if (!nombre.match(/^[0-9]+$/) || (nombre < 0 || nombre > 100)) {
		alert("Wrong"); return;
	}

	if (substract == 0) {
			document.getElementById("chofroa").innerHTML = "C'est gagné !";
			document.getElementById("chofroa").style.color = "#FF0000";
			document.getElementById("chofroa").style.fontWeight = "bold";
		} else if (substract <= 25) {
			document.getElementById("chofroa").innerHTML = "Tu chauffes !";
			document.getElementById("chofroa").style.color = "#FF6600";
		} else if (substract <= 50) {
			document.getElementById("chofroa").innerHTML = "Tu refoidis !";
			document.getElementById("chofroa").style.color = "#FFFFFF";
		} else if (substract <= 75) {
			document.getElementById("chofroa").innerHTML = "T'es givré, Mr Freeze !";
			document.getElementById("chofroa").style.color = "#0066FF";
		} else {
			document.getElementById("chofroa").innerHTML = "C'est l'Âge de glace !";
			document.getElementById("chofroa").style.color = "#0000FF";
		}

	var reset = document.getElementById("formulaire").reset();

	// -----< Variations du compteur >-----

	compteur++;

	console.log("Compteur : " + compteur);

	// ---------<< Nombre d'essais restants >>--------

	if (compteur == 5) {
		alert("Un indice ? La réponse est entre : " + (rng - 5) + " et " + (rng + 5));
	} else if (compteur == 10) {
		alert("Perdu ! Dommage ... La bonne réponse était : " + rng);
	} else {
		
	}

}

// ----------< Fin du Javascript >----------

console.log("Fin du JS");
