'use strict';

angular.module('storefrontApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/product/:id', {
        templateUrl: 'app/product/product.html',
        controller: 'StoreShowCtrl'
      });
  });
