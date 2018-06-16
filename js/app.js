var app = angular.module('scopeGallery', ['ja.qr']);
app.directive('loading', function () {
    return {
        restrict: 'E',
        replace:true,
        template: '<div class="loaderGif"></div>', // Define a template where the image will be initially loaded while waiting for the ajax request to complete
        link: function (scope, element, attr) {
            scope.$watch('loading', function (val) {
                val = val ? $(element).show() : $(element).hide();  // Show or Hide the loading image
            });
        }
    }
});