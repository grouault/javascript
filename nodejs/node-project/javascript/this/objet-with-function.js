/**
 * Created by grouault on 05/02/2018.
 */
/**
 * Objet testUtil
 *
 * ==> dans une fonction : this fait référence à l'objet.
 * @type {{varUn: string, varDeux: string}}
 */
var testUtil = {
    varUn: '',
    varDeux: ''
};

testUtil.init = function () {
    this.varUn = '1';
    this.varDeux = '2';
    console.log('[init] - this = ', this);
};

testUtil.end = function () {
    console.log('[end]');
}

testUtil.launch = function () {
    this.init();
    this.end();
};

testUtil.launch();