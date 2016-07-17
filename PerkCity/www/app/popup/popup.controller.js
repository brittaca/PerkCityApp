(function () {
	angular.module('perkCityApp')
	.controller('redeemPopupCtrl', function($scope, $ionicPopup, $ionicAnalytics) {

    $ionicAnalytics.track('Savings', {
    })
    
  	$scope.showPopup = function () {
        $scope.data = {}
        
    var myPopup = $ionicPopup.show({
        template: '<input type = "number" min="0.01" step="0.01" max="5000"  placeholder="$ Amount" ng-model = "data.model">',
        title: 'For Person Receiving Payment Only!',
        subTitle: 'Please enter in transaction total',
        scope: $scope,
			
        buttons: [
            { text: 'Cancel' }, 
            { text: '<b>Confirm</b>',
              type: 'button-positive',
                onTap: function (e) {
					
					if (!$scope.data.model) {
                    //don't allow the user to close unless he enters model...
                        e.preventDefault();
                    } else {
                        return $scope.data.model;
                    }
                  }
            }]
        });
      
    myPopup.then(function (res) {

        console.log('Tapped!', res);
    });
  	};
   

	});
})();