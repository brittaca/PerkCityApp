(function () {
	'use strict';

	angular.module('perkCityApp')
		.controller('appCtrl', appCtrl);

		appCtrl.$inject = ['$rootScope', 'AUTH_EVENTS', 'authService', '$scope', '$state', '$ionicPopup'];

		function appCtrl($rootScope, AUTH_EVENTS, authService, $scope, $state, $ionicPopup) {
			var appc = this;

			$scope.$on('currentUser', function(event) {
				var alertPopup = $ionicPopup.alert({
					title: 'Unauthorized!',
					template: 'Invalid access.',
					buttons: [{
						text: '<b>OK</b>',
						type: 'button-energized'
					}]
				});
			});

			$scope.$on(AUTH_EVENTS.notAuthenticated, function(event, response) {
				authService.logout();
					$state.go('login');
					var alertPopup = $ionicPopup.alert({
						title: 'Unauthenticated!',
						template: response.data,
						buttons: [{
							text: <b>OK</b>,
							type: 'button-energized'
						}]
					});
			});

			appc.currentUser = null;
			appc.logout = logout;


			function logout() {
				appc.currentUser = null;
					authService.logout();
						$state.go('login');
			}

			function setCurrentUser(user) {
				appc.currentUser = user;
			}



		}
})();