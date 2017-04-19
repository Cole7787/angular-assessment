angular.module('assessment')
.controller('shopCtrl', function($scope, shopSrvc){
    var getProducts = function(){
        console.log('this is da console');
        shopSrvc.getProducts().then(function(response){
            $scope.products = response.data;
            console.log($scope.products);
        });
    }
    getProducts();
});
