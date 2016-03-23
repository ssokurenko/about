var app = angular.module('githubCard', [])
    .controller('CardController', function($scope, $http){
        // Default avatar picture
        // this.avatar_url = "./img/loader.gif";

        // Requesting data using ajax
        $http.get("https://api.github.com/users/" + config.githubID)
            .then(function successCallback(response) {
                $scope.card = response.data;
                $scope.card.success = true;
            }, function errorCallback(response) {
                alert('does not work');
            });
    });