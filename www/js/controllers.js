/*** Created by zhixiong on 12/19/14.*/
/***App level controllers by angular js*/

define(['app.config', 'angular', 'services'], function (config, angular, services) {

    var mobileAppControllers = angular.module('mobile.controllers', ['mobile.services']);

    mobileAppControllers.controller('InitializationController', ['$scope', function ($scope) {
        $scope.app ={name:config.appName};
    }]);

    mobileAppControllers.controller('SiteListController', ['$scope','sites', 'categories', function ($scope, sites, categories) {
        $scope.appHeader = config.appHeader;
        $scope.sites = sites.query();
    }]);

    return mobileAppControllers;
});

