/**
 * Created by beiwp on 2016/9/7.
 */
'use strict';

mainApplicationModule.directive('infMenu', [function () {
    return {
        restrict: 'E',
        templateUrl:'./system/menu.html',
        replace: false

    }
}]);