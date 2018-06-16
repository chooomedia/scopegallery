app.controller('scope-gallery', function ($scope, $http) {
    $scope.showLoader = true;
    $scope.status = "Loading...";
    $scope.qrCode = "";
    $scope.photoCat = "photo";
    $scope.fileHref = "";
    $scope.searchField = "";

    $scope.toggleQr = function (photo) {
        $scope.qrCode = "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
        photo.showQr = !photo.showQr;

        if (photo.showQr) {
            photo.cssClass = 'qrButton qrActive';
        }
    };

    $scope.downLoad = function (photo) {
        console.log('Download Photo');
        $scope.fileHref = "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
    };

    $scope.enLarge = function (photo) {
        console.log('Enlarge Photo');
        $scope.fileHref = "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
    };

    // load FLICKR Photos

    $http({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=2e75e9b563bf1f9993dbae881bc49db1&format=json&nojsoncallback=1'
    }).then(function (response) {
        $scope.photos = response.data.photos.photo.map(function (photo) {
            photo.cssClass = 'qrButton';
            return photo;
        }, 3000);
        $scope.showLoader = false;
    });

    $scope.searchButton = function () {
        let searchResult = [this.searchField, this.photo];
        console.log(searchResult);

        $http({
            method: 'GET',
            url: 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2e75e9b563bf1f9993dbae881bc49db1&text=' + searchResult + '&format=json&nojsoncallback=1'
        }).then(function (response) {
            $scope.status = "Done!";
            $scope.photos = response.data.photos.photo.map(function (photo) {
                photo.cssClass = 'qrButton';
                return photo;
            }, 3000);
        });
    };
});
