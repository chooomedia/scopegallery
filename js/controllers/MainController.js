// app.factory('instaPics', ['$http', function($http){
// let cid = '986f99861521472fb2aa1a5496968382';

//       return {
//         fetchInstagram: function() {       
//             var url = "https://api.instagram.com/v1/users//chooomedia/media/recent?client_id=" + cid + "&callback=JSON_CALLBACK";
//             return $http.jsonp(url).then(function(response) {
//                 return response.data;
//             });
//         }
//     }
// }]);

app.controller('scope-gallery', function($scope, $http) {

// instagramCtrl = this;
// this.instagramPosts = [];   
// this.loading = true;
//   instaPics.fetchInstagram(function (data){
//     instagramCtrl.loading = false;  
//     for(var i = 0; i < 5; i++){
//          scope-gallery.instagramPosts.push(data[i]);
//     }        
// });

  $scope.status = "Loading...";
  $scope.loading = true;
  $scope.qrCode = "";
  $scope.photoCat = "photo";
  $scope.fileHref = "";
  $scope.searchField = "";

  $scope.toggleQr = function(photo) {
    $scope.qrCode = "http://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+".jpg";
    photo.showQr =! photo.showQr;

    if (photo.showQr) {
      photo.cssClass = 'qrButton qrActive';
    }
  };

  $scope.downLoad = function(photo) {
    console.log('Download Photo');
    $scope.fileHref = "http://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+".jpg";  
  }

  $scope.enLarge = function(photo) {
    console.log('Enlarge Photo');
    $scope.fileHref = "http://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+".jpg";  
  }

// socialMedia.fetchInstagram().then(function(data) {
//   $scope.data = data;
//   console.log($scope.data);
// });

// let photo_count = 99;
// let token = '5556067055.986f998.fa47ce1bddf34325a129d6d4f99e1586';
// let data = {access_token: token, count: photo_count};

// $http.get('https://api.instagram.com/v1/media/self/media/recent&format=json&nojsoncallback=1'')
//   .then(function(data) {
//     $scope.content = response.data;
//     $scope.statuscode = response.status;
//     $scope.statustext = response.statusText;
//   });

// load AMAZON Products
//   $http({
//     method: 'GET',
//     url: 'http://webservices.amazon.de/onca/json?Service=AWSECommerceService&Operation=ItemSearch&SubscriptionId=AKIAIELN3ERONKG4TMKQ&AssociateTag=mucrum-21&SearchIndex=All&Keywords=smartphone&ResponseGroup=Images,ItemAttributes,Offers'
//   }).then(function(response) {
//     $scope.products = response;
//   });


  // load FLICKR Photos
  $http({
    method: 'GET',
    url: 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=2e75e9b563bf1f9993dbae881bc49db1&format=json&nojsoncallback=1'
  }).then(function(response) {
    $scope.photos = response.data.photos.photo.map(function(photo) {
      photo.cssClass = 'qrButton';
      $scope.loading=false;
      return photo;
    });
  });

  $scope.searchButton = function() {
    let searchResult = [this.searchField, this.photo];
    console.log(searchResult);

    $http({
      method: 'GET',
      url: 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2e75e9b563bf1f9993dbae881bc49db1&text=' + searchResult + '&format=json&nojsoncallback=1'
    }).then(function(response) {
      $scope.status = "Done!";
      $scope.photos = response.data.photos.photo.map(function(photo) {
        photo.cssClass = 'qrButton';
        return photo;
      });
    });
  };
});
