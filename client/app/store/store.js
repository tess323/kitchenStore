'use strict';

  angular.module('storefrontApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/store', {
        templateUrl: 'app/store/store.html',
        controller: 'StoreCtrl'
      });
      
  });
