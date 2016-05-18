angular.module('myApp', [])

angular.module('myApp').controller('mainController', function($scope, $window) {
    var host  = 'http://192.168.56.102:8000/';

    $scope.mapshow = true;
    $scope.map = function() {
        $scope.mapshow = true;
        $scope.template = '';
    }

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

