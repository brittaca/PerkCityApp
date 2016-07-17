(function () {
	angular.module('perkCityApp')
	.service('perksService', ['$http', 'SERVER_URL', perksService]);

	function perksService($http, SERVER_URL) {

		this.notification = function (obj) {
			return $http.put(SERVER_URL + '/api/twilio', obj)
			.then(function(response) {
				return response.data;
			});
		};

		this.getPerks = function () {
			return $http.get(SERVER_URL + '/api/perk')
			.then(function(response) {
				return response.data;
			});
		};
	
		this.getCurrentPerk = function (id) {
			return $http.get(SERVER_URL + '/api/perk/' + id)
			.then(function(response) {
				return response.data;
			});
		};

		this.updatePerk = function (id, obj) {
			return $http.put(SERVER_URL + '/api/perk/' + id, obj)
			.then(function(response) {
				return response.data;
			});
		};

		this.updatePerkDetails = function (id, perkObj) {
			return $http.put(SERVER_URL + 'api/perk/details/add/' + id, perkObj)
			.then(function(response) {
				return response.data;
			});
		};

		this.deletePerkDetail = function (id, item) {
			return $http.put(SERVER_URL + 'api/perk/details/remove/' + id, item)
			.then(function(response) {
				return response.data;
			});
		};
	
	}

})();