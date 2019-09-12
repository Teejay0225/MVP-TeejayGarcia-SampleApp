(function(){
    'use-strict';

    angular
        .module('myApp')
        .directive('navHeader', function(){
            return{
                restrict: 'E',
                templateUrl: 'app/views/templates/nav-header.html'
            }
        })

})();
(function (){
    'use-strict';

    angular
        .module('myApp')
        .config(['$stateProvider', '$urlRouteProvider', '$locationProvider', '$urlMatcherFactoryProvider', '$injector',
        function ($stateProvider, $urlRouteProvider, $locationProvider, $urlMatcherFactoryProvider, $injector){
            urlMatcherFactoryProvider.caseSensitive(true);
            urlMatcherFactoryProvider.strictMode(false);
            urlRouterFactoryProvider.otherwise('/home');

            $stateProvider
                .state({
                    name: 'tj',
                    url: '/',
                    templateUrl: 'app/views/main.html'
                })


        }
    ])

})();