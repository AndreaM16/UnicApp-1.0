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

