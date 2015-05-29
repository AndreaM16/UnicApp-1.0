
myApp.factory('ngRepeatService', [function () {
        var init = '';

        return {
            getProperty: function() {
                return init;
            },
            setProperty: function(value) {
                init = value;
                return init;
            }
        };
}]);
