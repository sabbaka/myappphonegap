angular.module('myApp', [])

angular.module('myApp').controller('mainController', function($scope, $window) {
    $scope.mapShow = false;
    $scope.map = function() {
//        $scope.template = 'map.html';
        $scope.mapShow = true;
        $scope.template = '';
    }

    $scope.settings = function() {
        $scope.template = 'settings.html';
    }

    $scope.order = function() {
        $scope.template = 'order.html';
    }

    $scope.user = function() {
        $scope.template = 'user.html';
    }

    $scope.adv = function() {
        $scope.template = 'adv.html';
    }

    $scope.mapWidth = $window.innerWidth;
    $scope.mapHeight = $window.innerHeight;
});