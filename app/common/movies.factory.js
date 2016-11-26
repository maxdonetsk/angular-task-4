(function () {
    'use strict';

    angular
            .module('app')
            .factory('MoviesFactory', ['$http', '$q', 'BaseURL', function ($http, $q, BaseURL) {
                    function getCategories() {
                        var deferred = $q.defer();
                        $http.get(BaseURL + 'categories')
                                .success(function (response) {
                                    deferred.resolve(response);
                                })
                                .error(function (error) {
                                    deferred.resolve(error);
                                });
                        return deferred.promise;
                    }

                    function getLanguages() {
                        var deferred = $q.defer();
                        $http.get(BaseURL + 'languages')
                                .success(function (response) {
                                    deferred.resolve(response);
                                })
                                .error(function (error) {
                                    deferred.resolve(error);
                                });
                        return deferred.promise;
                    }

                    function getActors() {
                        var deferred = $q.defer();
                        $http.get(BaseURL + 'actors')
                                .success(function (response) {
                                    deferred.resolve(response);
                                })
                                .error(function (error) {
                                    deferred.resolve(error);
                                });
                        return deferred.promise;
                    }

                    function getFilms(params) {
                        var deferred = $q.defer();
                        var url = BaseURL;
                        url = url + 'films';
                        if (!!params.language && url.indexOf('?') > -1) {
                            url = url + '&language=' + params.language.name.toLowerCase();
                        } else {
                            url = url + '?language=' + params.language.name.toLowerCase();
                        }

                        $http.get(url)
                                .success(function (response) {
                                    deferred.resolve(response);
                                })
                                .error(function (error) {
                                    deferred.resolve(error);
                                });
                        return deferred.promise;
                    }

                    return  {
                        getCategories: getCategories,
                        getLanguages: getLanguages,
                        getActors: getActors,
                        getFilms: getFilms
                    };
                }]);
})();