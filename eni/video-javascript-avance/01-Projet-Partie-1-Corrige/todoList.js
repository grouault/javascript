// Déclarer un objet TodoList contenant :
// - Le nom de la liste courante
// - La liste des todos
// - L'heure de dernière récupération
// Supprimer les variables globales du fichier "main.js" permettant de stocker les todos ou le nom de la liste courante
var todoList = {
  todos: [],
  nomTodoList: "Defaut",
  derniereRecuperation: Date.now()
};

// On peut ajouter dynamiquement un attribut à un objet
todoList.version = "1.0";
console.log(todoList);

// On peut accéder à un attribut par deux moyens différents
console.log(todoList.nomTodoList);
console.log(todoList["nomTodoList"]);
