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