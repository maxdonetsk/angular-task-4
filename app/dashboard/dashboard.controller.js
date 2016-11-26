(function () {
    'use strict';

    angular
            .module('app')
            .controller('DashboardController', DashboardController);

    function DashboardController(MoviesFactory) {
        var vm = this;
        vm.languages = [];
        vm.categories = [];
        vm.actors = [];
        vm.films = [];
        vm.selected = {};
        vm.currentPage = 1;

        vm.onSubmit = onSubmit;

        MoviesFactory.getLanguages()
                .then(function (languages) {
                    vm.languages = languages;
                    vm.selected.language = vm.languages[0];
                    getFilms();
                })
                .catch(function (error) {

                });

        MoviesFactory.getCategories()
                .then(function (categories) {
                    vm.categories = categories;
                })
                .catch(function (error) {

                });

        MoviesFactory.getActors()
                .then(function (actors) {
                    vm.actors = actors;
                })
                .catch(function (error) {

                });

        function getFilms() {
            MoviesFactory.getFilms(vm.selected)
                    .then(function (films) {
                        vm.films = films;
                    })
                    .catch(function (error) {

                    });
        }

        function onSubmit(searchForm) {
            if (searchForm.$valid) {
                MoviesFactory.getFilms(vm.selected)
                        .then(function (films) {
                            vm.films = films;
                        })
                        .catch(function (error) {
                            error;
                        });
            }
        }

    }
}());