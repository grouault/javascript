var module = angular.module("MaPremiereApp", []);

module.controller("MonControleur", function( $scope ) {

  $scope.user = { name: "Gildas", lastName: "Rouault" };
  var userRoles = [];
  userRoles.push('ROLE_CA');
  userRoles.push('ROLE_DIR');
  userRoles.push('ROLE_ADMIN');
  $scope.roles = userRoles;

});

module.directive("bnUserRoles", function(){

  return {
    restrict: "A",
    link: function ($scope, element, attrs) {
      // default comportement.
      element.hide();
      // recuperation attrs.
      var tUserRoles = $scope.$eval( attrs.bnUserRoles );
      console.log("[Directive-UserRole] - roles : ", tUserRoles);
      var authorizedRoles = attrs.bnAuthorizedRoles || {};
      console.log("[Directive-UserRole] - authorizedRoles = ", authorizedRoles)

      // check si le user a l'autorisation en fonction de ses roles.
      if (tUserRoles.length > 0 && authorizedRoles && authorizedRoles.length > 0) {
        var tAuthorizedRoles = authorizedRoles.split(',');
        var isAuthorized = tAuthorizedRoles.some(function(i){
          return tUserRoles.indexOf(i) >= 0;
        })
        if (isAuthorized) {
           element.show();
        }
      }
    }
  }

});
