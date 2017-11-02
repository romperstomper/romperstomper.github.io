(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function ($scope) {
    $scope.input = "";
    $scope.total = 0;
    
    $scope.displayNumeric = function (){
    var inputarray = $scope.input.split(","); 
    $scope.total = inputarray.length;
    }
    
  });

})();
