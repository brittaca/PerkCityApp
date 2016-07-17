angular.module('app.controllers', ['firebase', 'ngCordova', 'ionic'])

        
.controller('preferredPricingCategoriesCtrl', function($scope) {

})
   
.controller('foodCtrl', function($scope) {

})
   
.controller('funCtrl', function($scope) {

})
   
.controller('healthFitnessCtrl', function($scope) {

})
   
.controller('servicesCtrl', function($scope) {

})
   
.controller('onlineCtrl', function($scope) {

})
   
.controller('redeemZeekSCtrl', function($scope) {

})

.controller('redeemColdStoneCtrl', function($scope) {
    
})
        
.controller('redeemCrossfitXDCtrl', function($scope) {

})
   
.controller('nearbyCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {
    
})
   //sign up
.controller('signUpCtrl', function($scope) {

})
   
.controller('welcomeCtrl', function($scope) {

})
  
  //firebase auth create users

//firebase auth create users
.controller("login2Ctrl", function($scope) {
 
})


.controller('moreCtrl', function($scope) {

})
   
.controller('perkRequestCtrl', function($scope) {

})
   
.controller('referralsCtrl', function($scope) {

})
   
.controller('settingsCtrl', function($scope) {

})
   
.controller('newPerksCtrl', function($scope) {

})
   
.controller('myLocationCtrl', function($scope) {

})
 
.controller('redeemPopupCtrl', function($scope, $ionicPopup, $ionicAnalytics) {

    $ionicAnalytics.track('Savings', {
        
    })
    
  $scope.showPopup = function() {
        $scope.data = {}
        
     var myPopup = $ionicPopup.show({
         template: '<input type = "number" min="0.01" step="0.01" max="5000"  placeholder="$ Amount" ng-model = "data.model">',
         title: 'For Person Receiving Payment Only!',
         subTitle: 'Please enter in transaction total',
         scope: $scope,
			
         buttons: [
            { text: 'Cancel' }, {
               text: '<b>Confirm</b>',
               type: 'button-positive',
                  onTap: function(e) {
						
                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
                }
            ]
        });
      
      myPopup.then(function(res) {

         console.log('Tapped!', res);
      });
  };
   
});

example.controller('myLocationCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: false};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      
  //Wait until the map is loaded
google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });      
 
  var infoWindow = new google.maps.InfoWindow({
      content: "Here I am!"
            })
        })
    })
});

