(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function ($scope) {
    $scope.inputstr = "";
    $scope.messagestr = "";
    
    $scope.displaymessage = function (){
      $scope.messagestr = displaymessage($scope.inputstr);
    }
    
  });
  function displaymessage(inputstr){
    var numarry = inputstr.split(",");
    var num = numarry.length;
    if (inputstr.trim() == ""){
      return "please enter data first";
    }
    else if (num <=3){
      return "enjoy!"
    }
    else {
      return "too much!"
    }
  }

})();
