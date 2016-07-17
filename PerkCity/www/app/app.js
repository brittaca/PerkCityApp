(function () {

	angular.module('perkCityApp', ['ionic','ionic.service.core', 'ionic.service.analytics', 'app.controllers','app.routes', 'app.services', 'app.directives', 'firebase', 'ngCordova'])

		.run(function ($ionicPlatform, $ionicAnalytics) {
			$ionicPlatform.ready(function () {

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
			});
		})

});