/**
 * Created by beiwp on 2016/9/6.
 */
'use strict';

var mainApplicationModuleName = 'inf';
// ngResource 支持restful 进行数据交互
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'ngCookies']);

/**
 * 配置块
 * 在模块的加载阶段，AngularJS会在提供者注册和配置的过程中对模块进行配置。
 * 在整个AngularJS的工作流中，这个阶段是唯一能够在应用启动前进行修改的部分
 */
mainApplicationModule.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/login', {
                templateUrl: './system/login.html',
                controller: 'systemController'
            })
            .otherwise({
                templateUrl: './system/index.html',
                controller: 'indexController'
            })
    }
]);

/**
 * 运行块
 * 运行块在注入器创建之后被执行，它是所有AngularJS应用中第一个被执行的方法。
 * 我们会在.run()块中设置路由事件的监听器以及过滤未经授权的请求。，都执行一个
 * 函数来验证用户的权限，放置这个功能唯一合理的地方就是run方法：
 * 登录认证
 */
mainApplicationModule.run(['$rootScope', '$location', 'authService', function ($rootScope, $location, authService) {
    $rootScope.$on('$routeChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (!authService.userIsLoginIn()) {
            if (toState.templateUrl === "./system/login.html") {
                // 已经转向登录路由因此无需重定向
            } else {
                $location.path('/login');
            }
        } else {
            $rootScope.moduleList = authService.getAuthorData();
        }
    });
}]);

if (window.location.hash == '#_=_') window.location.hash = '#!';
