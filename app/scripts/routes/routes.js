

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

  /*OP is for Other Pages, I need it to activate viewSwipe plugin*/

  .when('/OPOptions', {
    templateUrl: 'views/otherPages/infos/options.html',
    controller: 'OptionsController'
  })
  .when('/OPFullmap', {
    templateUrl: 'views/otherPages/infos/fullmap.html',
    controller: 'FullmapController'
  })
  .when('/OPmyNew1', {
    templateUrl: 'views/otherPages/news/myNew1.html',
    controller: 'myNewsController1'
  })
  .when('/OPmyNew2', {
    templateUrl: 'views/otherPages/news/myNew2.html',
    controller: 'myNewsController2'
  })
  .when('/OPObjReport', {
    templateUrl: 'views/otherPages/report/ObjReport.html',
    controller: 'ObjReportController'
  })
  .when('/OPcoursesPage', {
    templateUrl: 'views/otherPages/courses/coursesPage.html',
    controller: 'coursesPageController'
  })
  .when('/OPcourse1', {
    templateUrl: 'views/otherPages/courses/course1.html',
    controller: 'course1Controller'
  })
  .when('/OPcourse2', {
    templateUrl: 'views/otherPages/courses/course2.html',
    controller: 'course2Controller'
  })
  .when('/OPbook4Me', {
    templateUrl: 'views/otherPages/booking/book4Me.html',
    controller: 'book4MeController'
  })
  .when('/OPmyCalendar', {
    templateUrl: 'views/otherPages/calendar/myCalendar.html',
    controller: 'myCalendarController'
  })
  .when('/OPcalendarTime', {
    templateUrl: 'views/otherPages/calendar/calendarTime.html',
    controller: 'calendarTimeController'
  })
  .when('/OPcalendarPlace', {
    templateUrl: 'views/otherPages/calendar/calendarPlace.html',
    controller: 'calendarPlaceController'
  })
  .when('/OPfutureEvents', {
    templateUrl: 'views/otherPages/events/futureEvents.html',
    controller: 'futureEventsController'
  })
  .when('/OPmyDocuments', {
    templateUrl: 'views/otherPages/documents/myDocuments.html',
    controller: 'myDocumentsController'
  })
  .when('/OPwatchDocuments', {
    templateUrl: 'views/otherPages/documents/watchDocuments.html',
    controller: 'watchDocumentsController'
  })
  .otherwise({
    redirectTo: '/'
  });
})