'use strict';

/**
 * @ngdoc function
 * @name appdoitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appdoitApp
 */
angular.module('appdoitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
