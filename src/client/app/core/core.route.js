(function() {
    'use strict';

    angular
        .module('app.core')
        .config(config)
        .run(appRun);


    /* @ngInject */
    function config($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }


    /* @ngInject */
    function appRun(routerHelper, $rootScope, $injector, $localStorage, $translate, amMoment, moment) {
        var otherwise = '/';
        routerHelper.configureStates(getStates(), otherwise);
        amMoment.changeLocale($translate.use());

        $rootScope.randomize = function () {
            return 0.5 - Math.random();
        };
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    views: {
                        content: {
                            // templateUrl: 'app/core/404.html',
                            title: '404'
                        }
                    }
                }
            }
        ];
    }

})();
