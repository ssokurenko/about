var app = angular.module('githubCard', [])
    .controller('CardController', function($scope, $http){

        // Requesting data using ajax
        $http.get('https://api.github.com/users/' + config.githubID)
            .then(function successCallback(response) {
                $scope.card = response.data;
                $scope.card.success = true;

                // Fixing blog URL if the protocol value is not mentioned
                if ($scope.card.blog.indexOf('http') < 0) {
                    $scope.card.blog = 'http://' + $scope.card.blog;
                }
            }, function errorCallback() {
                $scope.card.error = true;
            });

    });