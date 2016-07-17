var example = angular.module('app.routes', ['ionic','firebase'])
//routes
example.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
   
      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.preferredPricingCategories', {
    url: '/categories',
    views: {
      'tab1': {
        templateUrl: 'templates/preferredPricingCategories.html',
        controller: 'preferredPricingCategoriesCtrl'
      }
    }
  })

  .state('tabsController.food', {
    url: '/food',
    views: {
      'tab1': {
        templateUrl: 'templates/food.html',
        controller: 'foodCtrl'
      }
    }
  })

  .state('tabsController.fun', {
    url: '/fun',
    views: {
      'tab1': {
        templateUrl: 'templates/fun.html',
        controller: 'funCtrl'
      }
    }
  })

  .state('tabsController.healthFitness', {
    url: '/health',
    views: {
      'tab1': {
        templateUrl: 'templates/healthFitness.html',
        controller: 'healthFitnessCtrl'
      }
    }
  })

  .state('tabsController.services', {
    url: '/services',
    views: {
      'tab1': {
        templateUrl: 'templates/services.html',
        controller: 'servicesCtrl'
      }
    }
  })

  .state('tabsController.online', {
    url: '/online',
    views: {
      'tab1': {
        templateUrl: 'templates/online.html',
        controller: 'onlineCtrl'
      }
    }
  })

  .state('tabsController.redeemZeekS', {
    url: '/redeemZeeks',
    views: {
      'tab1': {
        templateUrl: 'templates/redeemZeekS.html',
        controller: 'redeemZeekSCtrl'
      }
    }
  })

  .state('tabsController.redeemColdStone', {
    url: '/redeemColdstone',
    views: {
      'tab1': {
        templateUrl: 'templates/redeemColdStone.html',
        controller: 'redeemColdStoneCtrl'
      }
    }
  })

  .state('tabsController.redeemCrossfitXD', {
    url: '/redeemCrossfitxd',
    views: {
      'tab1': {
        templateUrl: 'templates/redeemCrossfitXD.html',
        controller: 'redeemCrossfitXDCtrl'
      }
    }
  })

  .state('tabsController.nearby', {
    url: '/nearby',
    views: {
      'tab3': {
        templateUrl: 'templates/nearby.html',
        controller: 'nearbyCtrl'
      }
    }
  })

  .state('login', {
    url: '/initial',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('login2', {
    url: '/login',
    templateUrl: 'templates/login2.html',
    controller: 'login2Ctrl'
  })

  .state('tabsController.more', {
    url: '/more',
    views: {
      'tab1': {
        templateUrl: 'templates/more.html',
        controller: 'moreCtrl'
      }
    }
  })

  .state('perkRequest', {
    url: '/perkRequest',
    templateUrl: 'templates/perkRequest.html',
    controller: 'perkRequestCtrl'
  })

  .state('referrals', {
    url: '/referrals',
    templateUrl: 'templates/referrals.html',
    controller: 'referralsCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('tabsController.newPerks', {
    url: '/new',
    views: {
      'tab2': {
        templateUrl: 'templates/newPerks.html',
        controller: 'newPerksCtrl'
      }
    }
  })

  .state('myLocation', {
    url: '/maps',
    templateUrl: 'templates/myLocation.html',
    controller: 'myLocationCtrl'
  })
    
     .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signUpCtrl'
  })


$urlRouterProvider.otherwise('page1/categories');

  

});
