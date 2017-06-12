angular.module('modal.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('modal.demo').controller('MainCtrl', function ($scope, $uibModal, $log, $document) {

  var items = [];
  items.push('item-1');
  items.push('item-2');
  items.push('item-3');

  $scope.items = items;
  $scope.selectedItem = '';

  $scope.open = function(item){

    $scope.selectedItem = item;

    var modalInstance = $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'selectedItem.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      scope: $scope,
      resolve: {
        /*
        items: function () {
          return $scope.items;
        },
        selectedItem : function() {
          return $scope.selectedItem;
        },
        scopeParent : function() {
          return $scope;
        }
        */
      }
    });

    modalInstance.opened.then(function (selectedItem) {
      $log.info('selectedItem = ', selectedItem);
    }, function () {
      $log.info('test modal-component dismissed at: ' + new Date());
    });

  };

});

angular.module('modal.demo').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

  // scope current Controller.
  $scope.items = $scope.items;
  $scope.selectedItem = $scope.selectedItem;

  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
