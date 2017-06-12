function requeteHTTPAsync(methode) {
  return function(url, callback) {
    // Construction de la requête
    var xmlHttp = new XMLHttpRequest();

    // Rappel de la fonction de callback lorsque la réponse à été réceptionnée
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        callback(xmlHttp.responseText);
      } else {
        if (xmlHttp.readyState == 4 && xmlHttp.status != 200) {
          callback(undefined, xmlHttp.status);
        }
      }
    };
    xmlHttp.open(methode, url, true);
    xmlHttp.send(null);
  }
}

var GetAsync = requeteHTTPAsync('GET');
var PostAsync = requeteHTTPAsync('POST');
var DeleteAsync = requeteHTTPAsync('DELETE');
