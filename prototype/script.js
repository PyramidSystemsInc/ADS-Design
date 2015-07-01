(function(angular) {
  'use strict';
angular.module('ads-prototype', ['ui.router', 'ngAnimate']) 
 .controller('SearchController', ['$scope', '$state', 
   function($scope, $state) {
     var vm = this;
     $scope.name = "SearchController";
     vm.viewResults = function () {
       $state.go('products');
     };
 }])
 
 .controller('ProductResultsController', ['$scope', '$state', 
   function($scope, $state) {
     var vm = this;
     $scope.name = "ProductResultsController";
     vm.backToSearch = function () {
       $state.go('search');
     };
     vm.viewDetail = function () {
       $state.go('product');
     };
 }])

 .controller('ProductDetailController', ['$scope', '$state', 
   function($scope, $state) {
     var vm = this;
     $scope.name = "ProductDetailController";
     vm.backToResults = function () {
       $state.go('products');
     };
 }])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/search');
  $stateProvider
  .state('search',
    {
      url: '/search',
      templateUrl: 'search.html',
      controller: 'SearchController',
      controllerAs: 'vm'
  })
  .state('products',
    {
      url: '/products/:query',
      templateUrl: 'products.html',
      controller: 'ProductResultsController',
      controllerAs: 'vm'
  })
  .state('product',
    {
      url: '/product/:id',
      templateUrl: 'product.html',
      controller: 'ProductDetailController',
      controllerAs: 'vm'
  });
});
})(window.angular);