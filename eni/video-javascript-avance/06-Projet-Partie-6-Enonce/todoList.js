// Déclarer un objet TodoList contenant :
// - Le nom de la liste courante
// - La liste des todos
// - L'heure de dernière récupération
var TodoList = function() {
  this.todos = [];
  this.nomTodoList = "Defaut";
  this.derniereRecuperation = Date.now();
};

// Déclarer une méthode permettant d'afficher le contenu de la todo list dans la console
TodoList.prototype.affichageConsole = function() {
  console.log("Todo list :", this.nomTodoList);
  console.log("Dernière récupération :", this.derniereRecuperation);
  console.log("Todos :", JSON.stringify(this.todos));
};

// Déclarer une méthode externe permettant de réinitialiser la date de récupération avec l'heure actuelle
TodoList.prototype.resetDerniereRecuperation = function() {
  this.derniereRecuperation = Date.now();
};

// Transformer la fonction "creerUnTodo" en méthode de l'objet TodoList
TodoList.prototype.creerUnTodo = function(titre, description) {
  var self = this;
  PostAsync("http://localhost:9090/todos/" + this.nomTodoList + "/" +
    titre + "/" +
    description,
    function(todo,
      error) {
      if (error) {
        console.log("ERREUR : " + error);
      } else {
        if (todo) {
          self.todos.push(JSON.parse(todo));
          self.resetDerniereRecuperation();
          afficherMesTodos();
        }
      }
    });
};

// Transformer la fonction "supprimerTodo" en méthode de l'objet TodoList
TodoList.prototype.supprimerTodo = function(uuid) {
  var self = this;
  DeleteAsync("http://localhost:9090/todos/" + todoList.nomTodoList + "/" +
    uuid,
    function(todo, error) {
      if (error) {
        console.log("ERREUR : " + error);
      } else {
        self.chargerTodos();
      }
    });
};

// Transformer la fonction "chargerTodos" en méthode de l'objet TodoList
TodoList.prototype.chargerTodos = function() {
  var self = this;
  GetAsync("http://localhost:9090/todos/" + todoList.nomTodoList,
    function(todos,
      error) {
      if (error) {
        console.log("ERREUR : " + error);
      } else {
        if (todos) {
          self.todos = JSON.parse(todos);
          self.derniereRecuperation = Date.now();
          afficherMesTodos();
          afficherTodos();
        }
      }
    });
};

// Déclarer une nouvelle instance de todo list
var todoList = new TodoList();

// Afficher dans la console le contenu de la todo list
todoList.affichageConsole();
