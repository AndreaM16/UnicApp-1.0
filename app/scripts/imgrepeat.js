var app=angular.module('imgr',[]);

app.controller('',function($scope){
    $scope.img=[
        {id:'img1',source:'images/img1.jpg'},
        {id:'img2',source:'images/img2.jpg'},
        {id:'img3',source:'images/img3.jpg'}
    ];
});