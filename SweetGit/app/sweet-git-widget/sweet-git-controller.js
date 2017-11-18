GITHUB_API_URL = "https://api.github.com/users/";

angular.module("sweetGit", [])
    .controller("sweetGitController", ['$scope', "$http",
        function ($scope, $http) {
            $scope.getGitInfo = function () {
            $scope.userNotFound = false;
            $scope.loaded = false;
            $http.get(GITHUB_API_URL + $scope.username)
                .then(function(response) {
                    response.data.name = response.data.name;
                    $scope.user = response.data;
                    $scope.loaded = true;
                });
            $http.get(GITHUB_API_URL + $scope.username + "/repos")
                .then(function successGetRepos(response, $scope) {
                    var reposFound = response.data.length > 0;
                    if(reposFound){
                        //todo: count stars
                    }
                });
            }
        }
    ]);