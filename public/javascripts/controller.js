/**
 * Created by beiwp on 2016/9/6.
 */
'use strict';

mainApplicationModule

    .controller('systemController', ['$rootScope','$scope', '$location', '$cookies', 'systemResource', 'authService', function ($rootScope,$scope, $location, $cookies, systemResource, authService) {
        /**
         * 登录
         */
        $scope.login = function () {
            var expiresDate = new Date();
            expiresDate.setMinutes(expiresDate.getMinutes() + 30);
            authService.setUserCookie($scope.user, expiresDate);

            $location.path('/');
            /*return;
             var loginService = new systemResource($scope.user);
             loginService.login(function (res) {

             }, function (e) {

             })*/
        }

    }])

    .controller('indexController', ['$scope', '$routeParams', '$location', 'authService', function ($scope, $routeParams, $location, authService) {

        /*$scope.user = $cookies.getObject('user');*/
        $scope.user = authService.getUserCookie();



    }])

;