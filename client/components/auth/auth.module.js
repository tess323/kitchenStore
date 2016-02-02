'use strict';

angular.module('storefrontApp.auth', [
  'storefrontApp.constants',
  'storefrontApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
