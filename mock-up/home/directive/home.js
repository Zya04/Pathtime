angular.module('appPathtime').directive("home", function () {
    return {
        restrict: 'E',
        templateUrl:'home/template/home.html',
        replace: true
    }
})