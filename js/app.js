var app = angular.module('githubCard', [])
    .controller('CardController', function($scope, $http){

        // Requesting data using ajax
        $http.get("https://api.github.com/users/" + config.githubID)
            .then(function successCallback(response) {
                $scope.card = response.data;
                $scope.card.success = true;
            }, function errorCallback() {
                $scope.card.error = true;
            });

    });