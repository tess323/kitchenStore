'use strict';

  angular.module('storefrontApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/store', {
        templateUrl: 'app/store/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store'
      }).when('/product/:id', {
    		templateUrl: 'app/store/show.html',
    		controller: 'StoreShowCtrl',
        controllerAs: 'product'
    	
    	});
      
  });
