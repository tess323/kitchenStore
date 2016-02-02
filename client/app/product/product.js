'use strict';

angular.module('storefrontApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/product', {
        templateUrl: 'app/product/product.html',
        controller: 'ProductCtrl'
      });
  });
