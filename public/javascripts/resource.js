/**
 * Created by beiwp on 2016/9/6.
 */
'use strict';


mainApplicationModule

    .factory('systemResource', ['$resource',
        function ($resource) {
            return $resource('',{

            }, {
                login: {
                    url:'/admin/login',
                    method: 'PUT'
                },
                register: {
                    url:'/admin/register',
                    method: 'PUT'
                }
            })
        }
    ]);