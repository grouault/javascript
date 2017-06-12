// Créer un objet "TodoListTest", héritant de "TodoList"  qui retournera des valeurs fixes plutôt que d'exécuter des appels asynchrones
var TodoListTest = function() {
  this.nomTodoList = "Defaut";
  this.derniereRecuperation = Date.now();
  this.todos = [];
};

TodoListTest.prototype = Object.create(TodoList.prototype);

// Déclarer une instance de TodoListTest qui remplace l'instant TodoList
todoList = new TodoListTest();

// Surcharger la méthode "creerUnTodo" pour qu'elle ne fasse pas appel au serveur
TodoList.prototype.creerUnTodo = function(titre, description) {
  var todo = {titre: titre, description: description};

  // Ajouter un identifiant aléatoire
  todo.uuid = Date.now();

  this.todos.push(todo);
  this.resetDerniereRecuperation();
  afficherMesTodos();
};

// Surcharger la méthode "supprimerTodo" pour qu'elle ne fasse pas appel au serveur
TodoList.prototype.supprimerTodo = function(uuid) {
  for (var i = 0; i < this.todos.length; i++) {
    if (this.todos[i].uuid === uuid) {
      this.todos.splice(i, 1);
      break;
    }
  }
  afficherMesTodos();
};

// Surcharger la méthode "chargerTodos" pour qu'elle ne fasse pas appel au serveur
TodoList.prototype.chargerTodos = function() {
  afficherMesTodos();
  afficherTodos();
};

// Afficher dans la console le contenu de la todo list
todoList.affichageConsole();
