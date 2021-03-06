// Déclarer un objet TodoList contenant :
// - Le nom de la liste courante
// - La liste des todos
// - L'heure de dernière récupération
var TodoList = function() {
  this.todos = [];
  this.nomTodoList = "Defaut";
  this.derniereRecuperation = Date.now();

  // Déclarer une méthode permettant d'afficher le contenu de la todo list dans la console
  this.affichageConsole = function() {
    console.log("Todo list :", this.nomTodoList);
    console.log("Dernière récupération :", this.derniereRecuperation);
    console.log("Todos :", JSON.stringify(this.todos));
  };
};

// Déclarer une méthode externe permettant de réinitialiser la date de récupération avec l'heure actuelle
TodoList.prototype.resetDerniereRecuperation = function() {
  this.derniereRecuperation = Date.now();
};

// Transformer la fonction "creerUnTodo" en méthode de l'objet TodoList

// Transformer la fonction "supprimerTodo" en méthode de l'objet TodoList

// Transformer la fonction "chargerTodos" en méthode de l'objet TodoList

// Déclarer une nouvelle instance de todo list
var todoList = new TodoList();

// Afficher dans la console le contenu de la todo list
todoList.affichageConsole();
