/**
 * Note :
 * Une référence peut être passé à une fonction anonyme.
 * Si la référence est réinitialisée dans le scope de la fonction anonyme, la nouvelle valeur de la référence
 * n'est présente que dans le scope de la fonction. Cela crée une nouvelle référence. La référence initiale passée
 * à la fonction anonyme a en référence la valeur initiale.
 * Les deux références pointent des objets différents.
 *
 * Par contre, changé une propriété de la référence passée à la fonction anonyme sera visible dans le scope globale.
 * L'objet est mis à jour. Les deux références pointent le même objet.
 */
var ref1 = {'name':'gigi'};
var ref2 = ref1;
var ref3 = {};
// test de référence
var ref4 = {'name':'titi'};
var ref5 = ref4;
var ref4 = {'name':'nothing'};

console.log('before - ref1 = ', ref1);
console.log('before - ref2 = ', ref2);
console.log('before - ref3 = ', ref3);

(function (ref1, ref2, ref3) {

    console.log('in-1- ref1 = ', ref1);
    console.log('in-1- ref2 = ', ref2);
    console.log('in-1- ref3 = ', ref3);
    ref2 = 'titi';
    console.log('in-2- ref2 = ', ref2);
    ref3.name = 'pupu';
    console.log('in-2- ref3 = ', ref3);

})(ref1, ref2, ref3);

console.log('after - ref1 = ', ref1);
console.log('after - ref2 = ', ref2);
console.log('after - ref3 = ', ref3);
console.log('ref4 = ', ref4);
console.log('ref5 = ', ref5);