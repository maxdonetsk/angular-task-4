(function () {
    'use strict';

    angular
            .module('app')
            .controller('DashboardController', DashboardController);

    function DashboardController(MoviesFactory) {
        var countAction = 0,
                countAnimation = 0,
                countChildren = 0,
                countClassics = 0,
                countComedy = 0,
                countDocumentary = 0,
                countDrama = 0,
                countFamily = 0,
                countForeign = 0,
                countGames = 0,
                countHorror = 0,
                countMusic = 0,
                countNew = 0,
                countSciFi = 0,
                countSports = 0,
                countTravel = 0;


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
                    console.log(error);
                });

        MoviesFactory.getCategories()
                .then(function (categories) {
                    vm.categories = categories;
                })
                .catch(function (error) {
                    console.log(error);
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
                        films.forEach(function (film) {
                            if (film.category === 'Action') {
                                countAction++;
                            }
                            if (film.category === 'Animation') {
                                countAnimation++;
                            }
                            if (film.category === 'Children') {
                                countChildren++;
                            }
                            if (film.category === 'Classics') {
                                countClassics++;
                            }
                            if (film.category === 'Comedy') {
                                countComedy++;
                            }
                            if (film.category === 'Documentary') {
                                countDocumentary++;
                            }
                            if (film.category === 'Drama') {
                                countDrama++;
                            }
                            if (film.category === 'Family') {
                                countFamily++;
                            }
                            if (film.category === 'Foreign') {
                                countForeign++;
                            }
                            if (film.category === 'Games') {
                                countGames++;
                            }
                            if (film.category === 'Horror') {
                                countHorror++;
                            }
                            if (film.category === 'Music') {
                                countMusic++;
                            }
                            if (film.category === 'New') {
                                countNew++;
                            }
                            if (film.category === 'Sci-Fi') {
                                countSciFi++;
                            }
                            if (film.category === 'Sports') {
                                countSports++;
                            }
                            if (film.category === 'Travel') {
                                countTravel++;
                            }
                            vm.categoriesChartData = [
                                {
                                    key: 'Action',
                                    y: countAction
                                },
                                {
                                    key: 'Animation',
                                    y: countAnimation
                                },
                                {
                                    key: 'Children',
                                    y: countChildren
                                },
                                {
                                    key: 'Classics',
                                    y: countClassics
                                },
                                {
                                    key: 'Comedy',
                                    y: countComedy
                                },
                                {
                                    key: 'Documentary',
                                    y: countDocumentary
                                },
                                {
                                    key: 'Drama',
                                    y: countDrama
                                },
                                {
                                    key: 'Family',
                                    y: countFamily
                                },
                                {
                                    key: 'Foreign',
                                    y: countForeign
                                },
                                {
                                    key: 'Games',
                                    y: countGames
                                },
                                {
                                    key: 'Horror',
                                    y: countHorror
                                },
                                {
                                    key: 'Music',
                                    y: countMusic
                                },
                                {
                                    key: 'New',
                                    y: countNew
                                },
                                {
                                    key: 'Sci-Fi',
                                    y: countSciFi
                                },
                                {
                                    key: 'Sports',
                                    y: countSports
                                },
                                {
                                    key: 'Travel',
                                    y: countTravel
                                }
                            ];
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        }

        function onSubmit(searchForm) {
            if (searchForm.$valid) {
                MoviesFactory.getFilms(vm.selected)
                        .then(function (films) {
                            vm.films = films;
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            }
        }

        vm.categoriesChartOptions = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
    }
}());