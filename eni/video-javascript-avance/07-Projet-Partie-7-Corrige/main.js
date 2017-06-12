// Déclarer une fonction qui injecte un élement todo dans le document HTML
function creerTodoHTML(todo) {
  var todoHTML = document.createElement('li');

  var todoTitreHTML = document.createElement('h3');
  var todoTitreText = document.createTextNode(todo.titre);
  todoTitreHTML.appendChild(todoTitreText);
  todoHTML.appendChild(todoTitreHTML);

  var todoDescriptionHTML = document.createElement('p');
  var todoDescriptionText = document.createTextNode(todo.description);
  todoDescriptionHTML.appendChild(todoDescriptionText);
  todoHTML.appendChild(todoDescriptionHTML);

  // <button></button>
  var todoRemoveHTML = document.createElement('button');

  // <button>Supprimer</button>
  var todoRemoveText = document.createTextNode('Supprimer');
  todoRemoveHTML.appendChild(todoRemoveText);

  todoRemoveHTML.onclick = function() {
    todoList.supprimerTodo(todo.uuid)
    .then(function() {
      actionChargerTodo();
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  todoHTML.appendChild(todoRemoveHTML);

  return todoHTML;
}

// Déclarer une fonction qui vide un élément HTML de ses enfants
function viderElementHTML(elementHTML) {
  while (elementHTML.firstChild) {
    elementHTML.removeChild(elementHTML.firstChild);
  }
}

// Déclarer une fonction qui affiche une liste de todos dans le document HTML
function afficherMesTodos() {
  var mesTodosHTML = document.querySelector('#mesTodos');
  viderElementHTML(mesTodosHTML);

  todoList.todos.forEach(function(todo) {
    var todoHTML = creerTodoHTML(todo);
    mesTodosHTML.appendChild(todoHTML);
  });
}

// Récupérer dans deux variables une référence vers les deux éléments de formulaire
var newTodoTitre = document.querySelector("#newTodoTitre");
var newTodoDescription = document.querySelector("#newTodoDescription");

// Déclarer une fonction de callback qui ajoute un nouveau todo contenant les informations saisies par l'utilisateur, et le stocke en local
function actionCreerUnTodo() {
  if (!verifierTitre(newTodoTitre.value) || !verifierDescription(newTodoDescription.value)) {
    console.log("Erreur de vérification");
  } else {
    todoList.creerUnTodo(transformerTitre(newTodoTitre.value), newTodoDescription.value)
      .then(function() {
        afficherMesTodos();
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

// Déclarer une fonction qui affiche la liste des todos
function afficherTodos() {
  var formulaire = document.querySelector('#todoListe');
  formulaire.style.visibility = "visible";
}

// Déclarer une fonction qui cache la liste des todos
function cacherTodos() {
  var formulaire = document.querySelector('#todoListe');
  formulaire.style.visibility = "hidden";
}

// Déclarer une variable qui référence le champs de formulaire qui stocke le nom de la todo liste
var newTodoListeTitre = document.querySelector("#newListe");

// Déclarer une fonction de callback appelé lors du clic sur le bouton Récupérer
function actionChargerTodo() {
  todoList.nomTodoList = newTodoListeTitre.value;
  todoList.chargerTodos()
  .then(function() {
    afficherMesTodos();
    afficherTodos();
  })
  .catch(function(error) {
    console.log(error);
  });
}

// Cacher la todo liste au chargement
cacherTodos();

// Rappel sur les regex :
// '\' précéède un caractère spécial (\b, \n, \t, ...)
// '^' début de la séquence
// '$' fin de la séquence
// '*' expression répétée de 0 à n fois
// '+' expression répétée de 1 à n fois
// '?' expression répétée de 0 à 1 fois
// {x, y} expression répétée de x à y fois
// '.' n'importe quel caractère
// '(xxxx)' capture d'une expression, réutilisable avec \1, \2, \3, etc.
// '|' opérateur logique ou
// [xyz] ensemble de caractère, [a-z] pour les caractères de a à z

// Ecrire une fonction qui vérifie que le titre commence bien par une majuscule et se termine par '.'
function verifierTitre(titre) {
    var regex = /^[A-Z].*\.$/;
    return titre.match(regex);
}

// Remplacer tous les espaces par un caractère '_'
function transformerTitre(titre) {
  var regex = /\s/;
  return titre.replace(regex, '_');
}

// Ecrire une fonction qui vérifie que la description est constituée uniquement de caractères alphanumériques ou d'underscores, ou de tirets, et que la longueur est comprise entre 5 et 50 caractères
function verifierDescription(description) {
  var regex = /^[\sA-z0-9_-]{5,50}$/;
  return description.match(regex);
}

// Quelques expressions régulières types :
// Adresse mail : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
// URL : /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
// Adresse IP : /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
// Tag HTML : /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/
