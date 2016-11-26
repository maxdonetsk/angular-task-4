(function () {
    'use strict';

    angular
            .module('app', [
                'ui.bootstrap',
                'ui.router',
                'ngSanitize',
                'ui.select'])
            .config(['$urlRouterProvider', function ($urlRouterProvider) {
                    $urlRouterProvider.otherwise('dashboard');
                }])
            .config(['$stateProvider', function ($stateProvider) {
                    $stateProvider
                            .state('dashboard', {
                                url: '/dashboard',
                                views: {
                                    content: {templateUrl: 'app/dashboard/dashboard.html'}
                                }
                            });
                }]);
    ;
}());