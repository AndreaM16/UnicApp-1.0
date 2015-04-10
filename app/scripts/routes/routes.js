

myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsController'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportController'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoController'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesController'
      })
      .when('/booking', {
        templateUrl: 'views/booking.html',
        controller: 'BookingController'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarController'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsController'
      })
      .when('/documents', {
        templateUrl: 'views/documents.html',
        controller: 'DocumentsController'
      })
      .when('/options', {
        templateUrl: 'views/infos/options.html',
        controller: 'OptionsController'
      })
      .when('/fullmap', {
        templateUrl: 'views/infos/fullmap.html',
        controller: 'FullmapController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })