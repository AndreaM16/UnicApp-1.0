function viewController ($scope,$location) {
        $scope.changeView = function(Segnalazioni){
            $location.views/segnalazioni.html(Segnalazioni); // path not hash
        }
    }