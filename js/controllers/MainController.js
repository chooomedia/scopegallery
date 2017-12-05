app.controller('MainController', function($scope, $http) {

    $scope.status = "Loading...";
    $scope.searchField = "";

    $http({
        method:'GET',
        url:'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=2e75e9b563bf1f9993dbae881bc49db1&format=json&nojsoncallback=1'
    }).then(function(response) {
        $scope.status = "Done!";
        $scope.photos = response.data.photos.photo;
    });

    $scope.plusOne = function(photo) {
        if (photo.likes === undefined) {
            photo.likes = 1;
        } else {
            photo.likes +=1;
        }
    };

    $scope.minusOne = function(photo) {
        photo.dislikes = photo.dislikes === undefined ? 1 : photo.dislikes + 1;
    };

    $scope.searchButton = function() {
        $scope.searchField = searchField.text;
        $http.jsonp("http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=74ea3bb6fc4420d5b298df4d99762e5e&text="+searchField+"&format=json&nojsoncallback=1&api_sig=7f697a5a32da7e770539a7dae4a6cef2").
        success(function (data) {
            $scope.images = data.items;
            $scope.loading = false;
        }).
        error(function (data) {
            $scope.images = "Request failed";
            $scope.loading = false;
        });

    };
});
