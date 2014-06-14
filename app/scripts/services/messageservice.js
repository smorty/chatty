'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($http, $q) {
  	this.getMessages = function(){
	  	var deferred = $q.defer();
		$http({
			method: 'GET', url: 'http://localhost:8080'
		}).success(function(data) {
	    	deferred.resolve(data);
	    }).error(function(err){
	    	deferred.reject(err);
	    });
	    return deferred.promise;
	};
	this.postMessage = function(text){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'http://localhost:8080',
			data: {message: text}
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(err){
			deferred.reject(err);
		});
		return deferred.promise;
	};
  });
