'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'app/partials/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'app/partials/phone-detail.html', controller: PhoneDetailCtrl}).
      when('/apps/:appId', {templateUrl: 'app/partials/app-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]).config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json, text/plain, * / *";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }]);

