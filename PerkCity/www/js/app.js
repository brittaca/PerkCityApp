
var example = angular.module('perkCityApp', ['ionic','ionic.service.core', 'ionic.service.analytics', 'app.controllers','app.routes', 'app.services', 'app.directives', 'firebase', 'ngCordova']);

var fb = null;

example.run(function($ionicPlatform, $ionicAnalytics) {
  $ionicPlatform.ready(function() {
      
       $ionicAnalytics.register();
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    } 
  
fb = new Firebase("https://perkcity.firebaseio.com/");
    });
});
      

example.controller("login2Ctrl", function($scope, $firebaseAuth, $location) {
 
    $scope.login = function(email, password) {
        var fbAuth = $firebaseAuth(fb);
        fbAuth.$authWithPassword({
            email: email,
            password: password
        }).then(function(authData) {
            $location.path("page1/categories");
        }).catch(function(error) {
            console.error("ERROR: " + error);
        });
    }
 
    $scope.register = function(email, password) {
        var fbAuth = $firebaseAuth(fb);
        fbAuth.$createUser({email: email, password: password}).then(function() {
            return fbAuth.$authWithPassword({
                email: email,
                password: password
            });
        }).then(function(authData) {
            $location.path("page1/categories");
        }).catch(function(error) {
            console.error("ERROR " + error);
        });
}
})





   


 
 

  
    
