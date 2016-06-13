angular.module('myApp', ['ui.bootstrap',]);

angular.module('myApp').service('taxiDriverSettings', function($http) {
//    var host  = 'http://192.168.56.102:8000/';

    $http.get('http://10.10.11.6:8000/api/order/').then(function(data){
        console.log(data.data);
    })
});

angular.module('myApp').controller('registerController', function($scope, $http) {
    $scope.step = 1;

    $scope.nextStep = function() {
        $scope.step++;
    }

    $scope.prevStep = function() {
        $scope.step--;
    }

    $scope.finishReg = function() {
        $http.post('http://10.10.11.6:8000/api/register/', $scope.driver).success(function(){}).error(function(){});
    }

});

angular.module('myApp').controller('mainController', function($scope, $window, taxiDriverSettings, $uibModal) {
//    var host  = 'http://192.168.56.102:8000/';

    $scope.mapshow = true;
    $scope.map = function() {
        $scope.mapshow = true;
        $scope.template = '';
    }


    $scope.openOrderModal = $uibModal.open({templateUrl: 'order.html'});
    $scope.closeModal = function() {
        $scope.openOrderModal.dismiss('close');
    }
    console.log($scope.openOrderModal);


    $scope.settings = function() {
        $scope.mapshow = false;
        $scope.template = 'settings.html';
    }

    $scope.order = function() {
        $scope.mapshow = false;
        $scope.template = 'order.html';
    }

    $scope.user = function() {

    }

    $scope.zones = function() {
        $scope.mapshow = false;
        $scope.template = 'zones.html';
    }

    $scope.adv = function() {
        $scope.mapshow = false;
        $scope.template = 'reccla.html';
    }

    $scope.mapWidth = $window.innerWidth;
    $scope.mapHeight = $window.innerHeight;
});

angular.module('myApp').controller('settingsController', function($scope) {

});

