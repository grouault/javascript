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
  todoList.creerUnTodo(newTodoTitre.value, newTodoDescription.value)
    .then(function() {
      afficherMesTodos();
    })
    .catch(function(error) {
      console.log(error);
    });
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
