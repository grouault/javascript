/**
 * Created by grouault on 05/01/2018.
 */
console.log("Hello world!");
console.log('this = ' + this);

// variable globale.
const maVar = 'ma chaine';
console.log('maVar = ', maVar);

// variable attaché à l'objet global.
console.log('this = ', this);
console.log('this.maVar = ', this.maVar);

// fonction anonyme.
(function (global) {

    console.log('Fonction anonyme : this.maVar = ', this.maVar);
    console.log('Fonction anonyme : global.maVar = ', global.maVar);

})(this);