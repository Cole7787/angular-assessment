angular.module('assessment')
.service('shopSrvc', function($http) {
    this.getProducts = function(){
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products'
        }).then(function(response){
            return response;
        });
    }
});
