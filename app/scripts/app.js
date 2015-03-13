'use strict';

/**
 * @ngdoc overview
 * @name appdoitApp
 * @description
 * # appdoitApp
 *
 * Main module of the application.
 */
angular
  .module('appdoitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/*
$('.container img:gt(0)').hide();

$('.next').click(function() {
    $('.container img:first-child').fadeOut().next().fadeIn().end().appendTo('.container');
});

$('.prev').click(function() {
    $('.container img:first-child').fadeOut();
    $('.container img:last-child').prependTo('.container').fadeOut();
    $('.container img:first-child').fadeIn();
});

*/

$(function(){
    $('#mainBtn').click(function(){
        window.location='http://www.unica.it/'
    });
});