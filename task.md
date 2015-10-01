#test the angular  bower node type;
#结果改成用webpack了，比brunch好用啊;

#开始回答那个问题吧
1. ng-if跟ng-show/hide的区别有哪些？
## app bootstrap
module.exports = function(arr){
    if(arr){
        var app = angular.module('myApp',arr);
    }else{
        var app = angular.module('myApp',[]);
    }
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['myApp']);
    });

    app.controller("one", ["$scope", "$http", function ($scope, $http) {

    }]);
    app.filter('rawHtml', ['$sce', function($sce){
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }]);
    return app;
};
## 多建立了一个boot.js 文件

## 创建非常多得dom，来证明差别
##
