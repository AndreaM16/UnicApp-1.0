

myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/mainPages/main.html',
        controller: 'MainController'
      })
      .when('/news', {
        templateUrl: 'views/mainPages/news.html',
        controller: 'NewsController'
      })
      .when('/report', {
        templateUrl: 'views/mainPages/report.html',
        controller: 'ReportController'
      })
      .when('/info', {
        templateUrl: 'views/mainPages/info.html',
        controller: 'InfoController'
      })
      .when('/courses', {
        templateUrl: 'views/mainPages/courses.html',
        controller: 'CoursesController'
      })
      .when('/booking', {
        templateUrl: 'views/mainPages/booking.html',
        controller: 'BookingController'
      })
      .when('/calendar', {
        templateUrl: 'views/mainPages/calendar.html',
        controller: 'CalendarController'
      })
      .when('/events', {
        templateUrl: 'views/mainPages/events.html',
        controller: 'EventsController'
      })
      .when('/documents', {
        templateUrl: 'views/mainPages/documents.html',
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
      .when('/myNew1', {
        templateUrl: 'views/news/myNew1.html',
        controller: 'myNewsController1'
      })
      .when('/myNew2', {
        templateUrl: 'views/news/myNew2.html',
        controller: 'myNewsController2'
      })
      .when('/mainReport', {
        templateUrl: 'views/report/mainReport.html',
        controller: 'mainReportController'
      })
      .when('/ObjReport', {
        templateUrl: 'views/report/ObjReport.html',
        controller: 'ObjReportController'
      })
      .when('/coursesPage', {
          templateUrl: 'views/courses/coursesPage.html',
          controller: 'coursesPageController'
      })
      .when('/course1', {
          templateUrl: 'views/courses/course1.html',
          controller: 'course1Controller'
      })
      .when('/course2', {
          templateUrl: 'views/courses/course2.html',
          controller: 'course2Controller'
      })
      .when('/book4Me', {
          templateUrl: 'views/booking/book4Me.html',
          controller: 'book4MeController'
      })
      .when('/myCalendar', {
          templateUrl: 'views/calendar/myCalendar.html',
          controller: 'myCalendarController'
      })
      .when('/calendarTime', {
          templateUrl: 'views/calendar/calendarTime.html',
          controller: 'calendarTimeController'
      })
      .when('/calendarPlace', {
          templateUrl: 'views/calendar/calendarPlace.html',
          controller: 'calendarPlaceController'
      })
      .when('/futureEvents', {
          templateUrl: 'views/events/futureEvents.html',
          controller: 'futureEventsController'
      })
      .when('/myDocuments', {
          templateUrl: 'views/documents/myDocuments.html',
          controller: 'myDocumentsController'
      })
      .when('/watchDocuments', {
          templateUrl: 'views/documents/watchDocuments.html',
          controller: 'watchDocumentsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })