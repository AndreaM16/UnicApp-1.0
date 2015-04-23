
myApp.service('sharedProperties', function () {
        var gotClicked = '';

        return {
            getProperty: function() {
                return gotClicked;
            },
            setProperty: function(value) {
                gotClicked = value;
            }
        };
    });