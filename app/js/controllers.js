'use strict';

/* Controllers */
function PhoneListCtrl($scope,$http,$resource,App) {
  $scope.orderProp = 'age';
    $http.defaults.useXDomain = true;
    $scope.apps = App.get_list();
}

PhoneListCtrl.$inject = ['$scope','$http','$resource','App'];



function PhoneDetailCtrl($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}


function AppDetailCtrl($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}
//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
