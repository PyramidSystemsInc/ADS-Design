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
 
 .controller('ProductResultsController', ['$scope', '$state', '$http',
   function($scope, $state, $http) {
     var vm = this;
     $scope.name = "ProductResultsController";
     
     $http.get('data/products.json')
       .then(function(res){
          vm.data = res.data;
        });
     
     vm.backToSearch = function () {
       $state.go('search');
     };
     vm.viewDetail = function (itemId) {
       $state.go('product', {'id': itemId});
     };
 }])

 .controller('ProductDetailController', ['$scope', '$state', '$http', '$stateParams',
   function($scope, $state, $http, $stateParams) {
     var vm = this;
     $scope.name = "ProductDetailController";
     
     $http.get('data/products.json')
       .then(function(res){
         if (res.data && res.data.results) {
           for (var i = 0; i < res.data.results.length; i++) {
             if (res.data.results[i].id === $stateParams.id) {
               vm.item = res.data.results[i];
               break;
             }
           }
         }
        });
     
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