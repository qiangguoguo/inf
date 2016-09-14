/**
 * Created by beiwp on 2016/9/6.
 */
'use strict';

mainApplicationModule

    .service('authService', ['$cookies', '$window',
        function ($cookies, $window) {

            var userIsLoginIn = function () {
                var tempUser = getUserCookie();
                for (var i in tempUser) {
                    return true;
                }
                return false;
            };

            var setUserCookie = function (user, expires) {
                $cookies.putObject('user', user, {'expires': expires});
            };

            var getUserCookie = function () {
                return $cookies.getObject('user');
            };

            var removeUserCookie = function () {
                $cookies.remove('user');
            };

            var getAuthorData = function () {
                return [{name: '商城中心', id: 'INF001'}, {name: '物业中心', id: 'INF002'}]
            };


            return {
                userIsLoginIn: userIsLoginIn,
                setUserCookie: setUserCookie,
                getUserCookie: getUserCookie,
                removeUserCookie: removeUserCookie,
                getAuthorData: getAuthorData
            }
        }
    ])


;