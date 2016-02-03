'use strict';

(function() {

class ProductCtrl {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.items = [];

    $http.get('/api/items/:id').then(response => {
      this.items = response.data;
      socket.syncUpdates('items', this.items);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('storefrontApp')
  .controller('ProductCtrl', function ($scope) {
    $scope.message = 'Hello';
  });
});

