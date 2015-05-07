
myApp.factory('sharedProperties', [function () {
        var gotClicked = '';

        return {
            getProperty: function() {
                return gotClicked;
            },
            setProperty: function(value) {
                gotClicked = value;
                return gotClicked;
            }
        };
    }]);

myApp.factory('bookingSharer', [function () {
        var myField = 'Corsi';

        return {
            getProperty: function() {
                return myField;
            },
            setProperty: function(value) {
                myField = value;
                return myField;
            }
        };
    }]);




