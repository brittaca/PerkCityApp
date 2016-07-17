(function () {
	'use strict';

	angular.module('perkCityApp')
		.config(configure);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', 'USER_ROLES'];

    function configure($stateProvider, $urlRouterProvider, $ionicConfigProvider, USER_ROLES) {

    	$ionicConfigProvider.backButton.text('').icon('ion-ios7-arrow-left');

    	$urlRouterProvider.otherwise('/login');

    	$stateProvider

    // LOGIN + REGISTER Routes

    	.state('login', {
    		url: '/login',
    		templateUrl: 'app/login/login.template.html',
    		controller: 'LoginCtrl',
    		controllerAs: 'logCtrl'
    	})
    	.state('employee-sign-up', {
    		url: '/employee-registration',
    		templateUrl: 'app/registration/employeeReg.template.html',
    		controller: 'RegistrationCtrl',
    		controllerAs: 'regCtrl'
    	})
    	.state('company-sign-up', {
    		url: '/company-registration',
    		templateUrl: 'app/registration/companyReg.template.html',
    		controller: 'RegistrationCtrl',
    		controllerAs: 'regCtrl'
    	})
    	.state('vendor-sign-up', {
    		url: '/vendor-registration',
    		templateUrl: 'app/registration/vendorReg.template.html',
    		controller: 'RegistrationCtrl',
    		controllerAs: 'regCtrl'
    	})
    
    // EMPLOYEE Routes

    	



    }   


});

