myApp.controller('watchDocumentsController', [ '$scope', 'PDFViewerService', function($scope, pdf){
		
		$scope.viewer = pdf.Instance("viewer");
		
		$scope.headerText='JustAPdf';

  		$scope.watchDocumentsBack='background-image:url('+'../../images/back.png'+')';

  		$scope.watchDocumentsBackTwice='background-image:url('+'../../images/backTwice.png'+')';

    	$scope.nextPage = function() {
        $scope.viewer.nextPage();
    };

    $scope.prevPage = function() {
        $scope.viewer.prevPage();
    };

    $scope.pageLoaded = function(curPage, totalPages) {
        $scope.currentPage = curPage;
        $scope.totalPages = totalPages;
    };	

}]);