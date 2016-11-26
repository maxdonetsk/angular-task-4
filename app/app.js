(function () {
    'use strict';

    angular
            .module('app', [
                'ui.bootstrap',
                'ui.router',
                'ngSanitize',
                'ui.select',
                'angularUtils.directives.dirPagination'])
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
                }])
            .config(function (paginationTemplateProvider) {
                paginationTemplateProvider.setPath('/bower_components/angularUtils-pagination/dirPagination.tpl.html');
            });
}());