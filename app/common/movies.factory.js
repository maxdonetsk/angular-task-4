(function () {
    'use strict';

    angular
            .module('app')
            .factory('MoviesFactory', ['$http', function ($http) {
                    function getAllDummy() {
                        var items = [];
                        for (var i = 1; i < 501; i++) {
                            items.push({
                                id: i,
                                title: 'Item ' + i,
                                width: i * 8,
                                height: i * 4,
                                length: i * 7
                            });
                        }
                        return items;
                    }

                    return  {
                        getAllDummy: getAllDummy
                    };
                }]);
})();