(function () {
	'use strict';

	angular.module('perkCityApp')
	.factory('authGaurdService', authGaurdService);

	authGaurdService.$inject = ['$rootScope', '$q', 'AUTH_EVENTS', 'authTokenService'];

	function authGaurdService($rootScope, $q, AUTH_EVENTS, authTokenService) {
		return {

			request: addAuthToken,
			responseError: responseError
		};

		function addAuthToken(config) {
			var token = authTokenService.getToken();
			if (token) {
				config.headers = config.headers || {};
				config.headers.Authorization = 'Bearer' + token;
			}
			return config;
		};

		function responseError(response) {
			$rootScope.$broadcast({
				401: AUTH_EVENTS.notAuthenticated, // user not found
				403: AUTH_EVENTS.notAuthorized // access not authorized
			}[response.status], response);
			return $q.reject(response);
		};



	
	};

})();