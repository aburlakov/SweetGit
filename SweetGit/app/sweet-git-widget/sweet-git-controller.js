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
                   // var reposFound = response.data.length > 0;
                   // var allStars = 0;
                 //   if(reposFound){
                 //      for(var repo in response.data.body){
                 //          allStars += repo.stargazers_count;
                 //      }
                 //   }
                    $scope.allStars = response.repos;
                });
            }
        }
    ]);