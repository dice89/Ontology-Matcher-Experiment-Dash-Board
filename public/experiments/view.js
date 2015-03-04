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

            var processedexp = experiments.map(function(result){
                result.macro_result.fmeasure = Math.round(result.macro_result.fmeasure*1000)/1000
                result.macro_result.precision =  Math.round(result.macro_result.precision*1000)/1000
                result.macro_result.recall =  Math.round(result.macro_result.recall*1000)/1000
                result.micro_result.fmeasure = Math.round(result.micro_result.fmeasure*1000)/1000
                result.micro_result.precision =  Math.round(result.micro_result.precision*1000)/1000
                result.micro_result.recall =  Math.round(result.micro_result.recall*1000)/1000

                return result
            });

            vm.experiments = processedexp;
        });

    });