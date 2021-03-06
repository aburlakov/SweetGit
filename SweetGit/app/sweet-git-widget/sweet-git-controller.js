GITHUB_API_URL = "https://api.github.com/users/";

angular.module("sweetGit", [])
    .controller("sweetGitController", ['$scope', "$http",
        function ($scope, $http) {
            $scope.getGitInfo = function () {
            $scope.userNotFound = false;
            $scope.loaded = false;
            $http.get(GITHUB_API_URL + $scope.username)
                .then(function(response) {
                    $scope.user = response.data;
                    $scope.loaded = true;
                });
            $http.get(GITHUB_API_URL + $scope.username + "/repos")
                .then(function (response) {
                    var allStars = 0;
                    for(var i = 0; i < response.data.length; i++) {
                        var repo = response.data[i];

                        allStars += repo.stargazers_count;
                    }
                   $scope.user.stars = allStars;
                });
            }
        }
    ]);