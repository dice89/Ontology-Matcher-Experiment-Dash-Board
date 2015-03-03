'use strict';

angular.module('myApp.experimentsTable', ['ngRoute', 'datatables', 'ngResource'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/experiments', {
            templateUrl: 'experiments/view.html',
            controller: 'tableCtrl'
        });
    }])

    .controller('tableCtrl', function ($resource,DTOptionsBuilder, DTColumnBuilder, DTInstances) {
        var vm = this;

        $resource('/api/experiments').query().$promise.then(function(experiments) {
            vm.experiments = experiments;
        });

    });