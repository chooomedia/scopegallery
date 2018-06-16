app.controller('scopeGallery', function ($scope, $http) {

    $scope.loading = true;
    $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=2e75e9b563bf1f9993dbae881bc49db1&format=json&nojsoncallback=1').success(function (data) {
        $scope.photos = data.photos.photo;
        $scope.loading = false;
        return photo;
    }, 600);

    $scope.qrCode = "";
    $scope.photoCat = "photo";
    $scope.fileHref = "";
    $scope.searchField = "";
    $scope.backgr = "(0,0,0,0.1)";


    $scope.toggleQr = function (photo) {
        this.qrCode = "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
        photo.qrClicked = 'qrActive';
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
        $scope.photoEnlarge = "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
        $scope.displayer = 'block';
        $scope.backgr = '(0,0,0,0.9)';
        $scope.animateBox = 'animated';
    };

    $scope.closeDialog = function (closeIt) {
        this.closeIt = true;
        $scope.displayer = 'none';
        $scope.backgr = '(0,0,0,0)';
    };

    $scope.searchButton = function () {
        let searchResult = [this.searchField, this.photo];

        $http({
            method: 'GET',
            url: 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2e75e9b563bf1f9993dbae881bc49db1&text=' + searchResult + '&format=json&nojsoncallback=1'
        }).then(function (response) {
            $scope.status = "Done!";
            $scope.photos = response.data.photos.photo.map(function (photo) {
                photo.cssClass = 'qrButton';
                return photo;
            }, 600);
        });
    };
});
