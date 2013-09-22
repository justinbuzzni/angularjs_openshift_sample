'use strict';

/* Services */

angular.module('phonecatServices', ['ngResource']).
    factory('App', function($resource){
        return $resource('http://17.buzzni.com/app/get_list', {}, {
            get_list: {method:'GET', params:{},isArray:true}
  })});
