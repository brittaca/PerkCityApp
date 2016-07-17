(function () {
    angular.module('perkCityApp')
    .controller('perksListCtrl', ['perksService', $timeout, perksListCtrl]);

    function perksListCtrl(perksService, $timeout) {
        var plc = this;

        plc.reverse = false;

        perksService.getPerks()
            .then(function (perk) {
                $timeout(function() {
                    plc.perksList = perk;
                }, 1000);
            });
    });
    
    }
})();