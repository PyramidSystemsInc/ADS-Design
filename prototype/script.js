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
          if (vm.data && vm.data.results) {
            for (var i = 0; i < vm.data.results.length; i++) {
              vm.data.results[i].price = vm.getPrice();
              vm.data.results[i].retailer = vm.getRetailer();
            }
          }
        });
     
     vm.backToSearch = function () {
       $state.go('search');
     };
     vm.viewDetail = function (itemId) {
       $state.go('product', {'id': itemId});
     };
     vm.getPrice = function () {
       // we can decide to get price by item id later
       return '$' + (Math.floor(((Math.random() * 800) + 200))/100.0).toFixed(2); 
     };
     var retailers = ['CVS', 'Target', 'Amazon', 'Walgreens', 'Rite Aid', 'Cotco'];
     vm.getRetailer = function () {
      return retailers[Math.floor(Math.random() * (retailers.length - 1))];
     };
 }])

 .controller('ProductDetailController', ['$scope', '$state', '$http', '$stateParams', '$window',
   function($scope, $state, $http, $stateParams, $window) {
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
      var currentWidth = angular.element($window).width();
      vm.small = false;
      if (currentWidth < 700) {
        vm.small = true;
      }
     
     vm.backToResults = function () {
       $state.go('products');
     };
 }])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/search');
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