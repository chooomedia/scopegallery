
  // instagramCtrl = this;
// this.instagramPosts = [];   
// this.loading = true;
//   instaPics.fetchInstagram(function (data){
//     instagramCtrl.loading = false;  
//     for(var i = 0; i < 5; i++){
//          scope-gallery.instagramPosts.push(data[i]);
//     }        
// });

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

