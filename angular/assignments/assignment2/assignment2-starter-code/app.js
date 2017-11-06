(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController);

  ToBuyController.$inject = ['$scope'];
  function ToBuyController($scope) {
    $scope.list1 = "moo";
  }

})();
