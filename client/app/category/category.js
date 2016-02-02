'use strict';

angular.module('storefrontApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/category', {
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });
