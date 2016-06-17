(function (angular) {

    angular.module('services.common', [])
    angular.module('services.domain', ['services.common'])

    var app = angular.module('app', [
        'ui.router',
        'kendo.directives',
        'services.common',
        'services.domain'
    ])
    
})(angular)