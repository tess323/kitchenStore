'use strict';

/* Controllers */

var storeControllers = angular.module('storeControllers', []);

storeControllers.controller('StoreCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/api/items').then(response => {
      this.items = response.data;
      console.log($scope.items)
     
    });

    
  }]);

storeControllers.controller('StoreShowCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
   $http.get('api/items/'+$routeParams.id).then(response => {
      $scope.items= response.data;
      console.log($scope.items);
     
      });

   
  }]);

        

 

