(function () {
	angular.module('perkCityApp')
	.service('userService', ['$http', 'SERVER_URL', userService]);

	function userService($http, SERVER_URL) {

		this.currentUser = function (id) {
			return $http.get(SERVER_URL + '/api/user/' + id)
			.then(function(response) {
				return response.data;
			});
		};

		this.updateUser = function (id, obj) {
			return $http.put(SERVER_URL + '/api/user' + id, obj)
			.then(function(response) {
				return response.data;
			});
		};


	}

})();