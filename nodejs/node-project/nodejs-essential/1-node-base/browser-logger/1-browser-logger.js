/**
 * Created by grouault on 22/08/2017.
 */
console.log('this(out-1) = ' + this);
(function (undefined) {
    console.log('this(in) = ' + this);
    function Logger(){}
    Logger.prototype.log = function (message /* ... */) {
        console.log('arguments = ', arguments);
        console.log('console = ', console);
        console.log.apply(console, arguments);
    }
    // mise de l'objet dans le scope-global
    this.Logger = Logger; /* Met dans le contexte global le prototype/classe browser-logger*/

})();
console.log('this(out-2) = ' + this);
console.log('this.Logger (\'prototype\') = ', Logger);
var logger = new Logger();
console.log('logger (\'instance\') = ', logger);
logger.log("This","is","pretty","cool");