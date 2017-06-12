function requeteHTTPAsync(methode) {
  return function(url) {
    var deferred = Q.defer();

    // Construction de la requête
    var xmlHttp = new XMLHttpRequest();

    // Rappel de la fonction de callback lorsque la réponse à été réceptionnée
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        deferred.resolve(xmlHttp.responseText);
      } else {
        if (xmlHttp.readyState == 4 && xmlHttp.status != 200) {
          deferred.reject(xmlHttp.status);
        }
      }
    };
    xmlHttp.open(methode, url, true);
    xmlHttp.send(null);
    return deferred.promise;
  }
}

var GetAsync = requeteHTTPAsync('GET');
var PostAsync = requeteHTTPAsync('POST');
var DeleteAsync = requeteHTTPAsync('DELETE');
