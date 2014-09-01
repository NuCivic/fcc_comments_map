'use strict';

angular.module('fccViz', [
  'ngRoute',
  'fccViz.filters',
  'fccViz.services',
  'fccViz.directives',
  'fccViz.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/county/:countyId', {templateUrl: 'partials/county.html', controller: 'CountyCtrl'});
  $routeProvider.otherwise({templateUrl: 'partials/home.html', controller: 'USAMapCtrl'});

}]);