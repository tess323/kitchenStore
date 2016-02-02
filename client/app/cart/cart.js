'use strict';

angular.module('storefrontApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cart', {
        templateUrl: 'app/cart/cart.html',
        controller: 'CartCtrl'
      });
  });
