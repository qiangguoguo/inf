/**
 * Created by beiwp on 2016/9/7.
 */
'use strict';

mainApplicationModule
    .directive('infMenu', [function () {
        return {
            restrict: 'E',
            templateUrl: './system/menu.html',
            replace: false,
            link: function ($scope, element, attr) {
                //菜单点击事件
                $scope.clickMenu = function (item) {
                    item.isActived = !item.isActived;
                    $scope.menuList = $scope.menuList.filter(function (obj, index, arr) {
                        if (obj.id !== item.id) {
                            obj.isActived = false;
                        }
                        return obj;
                    });
                    return item.isActived;
                }
            }

        }
    }])

    .directive('infHeader', ['$rootScope', '$location', 'authService', function ($rootScope, $location, authService) {
        return {
            restrict: 'E',
            template:"<div class='row'>"+
                        "欢迎{{user.username||''}} 来到友门鹿接口管理系统"+
                        "<p><a ng-click='loginOut()'>去登陆</a> |<a ng-click='loginOut()'>退出登录</a>|  <a href='#!/manager'>去管理台</a> </p>"+
                        "</div>",
            replace: false,
            link: function ($scope, element, attr) {
                //退出登录 09-13
                $scope.loginOut = function () {
                    authService.removeUserCookie();
                    $rootScope.user = null;
                    $location.path('/login');
                }
            }
        }
    }])
;