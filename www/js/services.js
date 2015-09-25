/**
 * Created by zhixiong on 12/23/14.
 */
/***App level services define by angular js*/

define(['angular', 'angularResource'], function (angular) {
    var mobileServices = angular.module('mobile.services', ['ngResource']);

    mobileServices.factory('reports', ['$resource', function ($resource) {
        return $resource('http://linzhixiong.com:8089/document/:id', {}, {
                query: {method: 'GET', params: {}, isArray: true}
            }
        );
    }]);

    mobileServices.factory('categories', ['$resource', function ($resource) {
        return $resource('reports/categories.json', {}, {
                query: {method: 'GET', params: {id: 'categories'}, isArray: true}
            }
        );
    }]).factory('sites', ['$resource', function ($resource) {
        return $resource('http://linzhixiong.com:8089/site', {}, {
                query: {method: 'GET', params: {}, isArray: true}
            }
        );
    }]);
    return mobileServices;
});

