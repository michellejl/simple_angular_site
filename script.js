var app = angular.module('techy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/main',{
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    }).
    when('/about',{
      templateUrl: 'about.html',
      controller: 'MainCtrl'
    }).
    when('/services',{
      templateUrl: 'services.html',
      controller: 'ServicesCtrl'
    }).
    when('/contact',{
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    }).
    otherwise({redirectTo: '/main'});
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  $scope.title = 'Techy Solutions';
  
  $http.get('services.json').then(function(responce){
    $scope.services = responce.data;
  })
  
}])

.controller('ServicesCtrl',['$scope', '$http', function($scope, $http){
  $http.get('services.json').then(function(responce){
    $scope.services = responce.data;
  })
}])

.controller('ContactCtrl',['$scope', '$http', function($scope, $http){
  $scope.email = 'support@techysolutions.fake';
  
  $http.get('locations.json').then(function(responce){
    $scope.locations = responce.data;
  })
  
}])