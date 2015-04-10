'use strict';

/**
 * @ngdoc overview
 * @name appdoitApp
 * @description
 * # appdoitApp
 *
 * Main module of the application.
 */
var appdoitApp =
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
        controller: ''
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: ''
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: ''
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: ''
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: ''
      })
      .when('/booking', {
        templateUrl: 'views/booking.html',
        controller: ''
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: ''
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: ''
      })
      .when('/documents', {
        templateUrl: 'views/documents.html',
        controller: ''
      })
      .when('/fullmap', {
        templateUrl: 'views/infos/fullmap.html',
        controller: ''
      })
      .when('/options', {
        templateUrl: 'views/infos/options.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  });

