var angular = require("angular");
var config = require("../config/main");
var app_name = config.name;
module.exports = function(arr){
    if(arr){
        var app = angular.module(app_name,arr);
    }else{
        var app = angular.module(app_name,[]);
    }
    angular.element(document).ready(function () {
        angular.bootstrap(document, [app_name]);
    });

    app.controller("one", ["$scope", "$http", function ($scope, $http) {
        $scope.name = "yangyu"
    }]);
    app.filter('rawHtml', ['$sce', function($sce){
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }]);
    return app;
};
