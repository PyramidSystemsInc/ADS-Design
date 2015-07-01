(function(angular) {
  'use strict';
angular.module('ads-prototype', ['ngRoute']) 
 .controller('SearchController', function($scope, $routeParams) {
     $scope.name = "SearchController";
     $scope.params = $routeParams;
 })
 
 .controller('ProductResultsController', function($scope, $routeParams) {
     $scope.name = "ProductResultsController";
     $scope.params = $routeParams;
 })

 .controller('ProductDetailController', function($scope, $routeParams) {
     $scope.name = "ProductDetailController";
     $scope.params = $routeParams;
 })

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'search.html',
    controller: 'SearchController'
  })
   .when('/Products/:query', {
    templateUrl: 'products.html',
    controller: 'ProductResultsController'
  })
  .when('/product/:id', {
    templateUrl: 'product.html',
    controller: 'ProductDetailController'
  });
});
})(window.angular);