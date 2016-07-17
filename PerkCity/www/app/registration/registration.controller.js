(function () {
'use strict';

angular.module('waitrApp')
  .controller('RegistrationCtrl', RegistrationCtrl);

  RegistrationCtrl.$inject = ['authService', '$state', '$ionicPopup'];

  function RegistrationCtrl(authService, $state, $ionicPopup) {
    var regCtrl = this;

    regCtrl.emp = {
        firstName: '',
     	  lastName: '',
     	  email: '',
     	  password: '',
      	phone: ''
    };
    regCtrl.comp = {
      	firstName: '',
      	lastName: '',
      	email: '',
      	password: '',
      	phone: '',
      	companyName: ''
    };
    regCtrl.vend = {
      	firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        vendorName: ''
    }

    regCtrl.register = register;

    ///////////////

    function register(data) {
      authService.register(data).then(function(res) {
        // console.log(res);
        regCtrl.emp.firstName = '';
        regCtrl.emp.lastName = '';
        regCtrl.emp.email = '';
        regCtrl.emp.password = '';
        regCtrl.emp.phone = '';

        regCtrl.comp.firstName = '';
        regCtrl.comp.lastname = '';
        regCtrl.comp.email = '';
        regCtrl.comp.password = '';
        regCtrl.comp.phone = '';
        regCtrl.comp.companyName = '';

        regCtrl.vend.firstName = '';
        regCtrl.vend.lastName = '';
        regCtrl.vend.email = '';
        regCtrl.vend.password = '';
        regCtrl.vend.phone = '';
        regCtrl.vend.vendorName = '';

        if (res.role === 'employee') $state.go('employee.home');
        if (res.role === 'company') $state.go('company.home');
        if (res.role === 'vendor') $state.go('vendor.home')
      }, function(res) {
        // console.log('Registration Error: ' + res.data)
        // var alertPopup = $ionicPopup.alert({
        //   title: 'Registration failed!',
        //   template: 'Error: ' + res
        // });
      });
    }

  }
})();