angular.module('FindMe.controllers', ['ngCordova'])

.controller('OffersCtrl', function($scope, Histories) {

  $scope.histories = Histories.all();
  $scope.remove = function(history) {
    Histories.remove(history);
  }
})

.controller('HistoriesCtrl', function($scope, Histories) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.histories = Histories.all();
  $scope.remove = function(history) {
    Histories.remove(history);
  }
})

.controller('HistoryDetailCtrl', function($scope, $stateParams, Histories) {
  $scope.history = Histories.get($stateParams.offerId);
})

.controller('OfferDetailCtrl', function($ionicPopup, $scope, $stateParams, Histories, $cordovaCamera) {
  $scope.history = Histories.get($stateParams.offerId);

  document.addEventListener("deviceready", function () {

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
    console.log("Camera");
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      console.log("Device has no Camera!")
    });

  }, false);


   $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Add Friend',
     template: 'Allow access to Facebook?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('Yes');
     } else {
       console.log('No');
     }
   });
 };
})

.controller('CameraCtrl', function($scope, $cordovaCamera) {

    console.log("Camera");
  document.addEventListener("deviceready", function () {


    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
    console.log("Camera");
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      console.log("Device has no Camera!")
    });

  }, false);
})

.controller('AccountCtrl',function($scope) {
});
