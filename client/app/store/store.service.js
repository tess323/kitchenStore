angular.module('ItemServices', ['ngResource'])
.factory('Item', ['$resource', function($resource) {
	return $resource('http://localhost:9000/api/items/:id');
}]);