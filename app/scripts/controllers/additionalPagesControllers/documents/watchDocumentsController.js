myApp.controller("watchDocumentsController", [ "$scope","$http", "PDFViewerService", function($scope,$http, pdf){

    $http.get('data/otherPages/documents/watchDocumentsJSON.json').success(function(data){

        $scope.data=data;

        $scope.viewer = pdf.Instance("viewer");

        $scope.nextPage = function() {
            data.viewer.nextPage();
        };

        $scope.prevPage = function() {
            data.viewer.prevPage();
        };

        $scope.pageLoaded = function(curPage, totalPages) {
            data.currentPage = curPage;
            data.totalPages = totalPages;
        };  

    })

}]);