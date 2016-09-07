/**
 * Created by beiwp on 2016/9/6.
 */
'use strict';

mainApplicationModule

    .service('authService', ['$cookies',
        function ($cookies) {

            var userIsLoginIn = function () {
                return getUserCookie();
            };

            var setUserCookie = function (user, expires) {
                $cookies.putObject('user', user, {'expires': expires});
            };

            var getUserCookie = function () {
                return $cookies.getObject('user');
            };

            var getAuthorData = function () {
                return [{name: '商城中心', id: 'INF001'}, {name: '物业中心', id: 'INF002'}]
            };

            return {
                userIsLoginIn: userIsLoginIn,
                setUserCookie: setUserCookie,
                getUserCookie: getUserCookie,
                getAuthorData: getAuthorData
            }
        }
    ])


;