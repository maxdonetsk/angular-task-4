(function () {
    'use strict';

    angular
            .module('app', [
                'ui.bootstrap',
                'ui.router',
                'ngSanitize',
                'ui.select',
                'angularUtils.directives.dirPagination',
                'nvd3'])
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
                var path = (window.location.hostname === '52.35.179.136') ? '/angular-test-4/bower_components/angularUtils-pagination/dirPagination.tpl.html' : 'bower_components/angularUtils-pagination/dirPagination.tpl.html';
                paginationTemplateProvider.setPath(path);
            });
}());