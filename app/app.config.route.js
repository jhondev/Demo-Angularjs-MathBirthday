(function (angular) {

    var app = angular.module('app')

    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('app', {
                url: '/home',
                templateUrl: 'app/modules/main/home.html',
                controller: 'Home as vm'
            })

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get("$state")
            $state.go("app")
        })
    })
    
})(angular)