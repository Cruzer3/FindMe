angular.module('FindMe.controllers', ['ngCordova'])

.controller('OffersCtrl', function($scope, Histories) {

  $scope.histories = Histories.all();
  $scope.remove = function(history) {
    Histories.remove(history);
  }
})

.controller('AccountCtrl', function($scope, $ionicPopup) {

   $scope.showConfirmGet = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Get New Offers',
     template: 'Are you sure you want to load all new Offers into your List?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('Yes');
     } else {
       console.log('No');
     }
   });
 }

    $scope.showConfirmDelete = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Delete Offers',
     template: 'Are you sure you want to delete all offers forever?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('Yes');
     } else {
       console.log('No');
     }
   });
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

  $scope.show = function(id){
    var show = "dont show";
    if($scope.history.type == "Group"){
      if($scope.history.tasks[id-1].me == true){
    show = "show";
    }
    }
    return show;
};

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

.controller('OptionsCtrl',function($scope) {
  $scope.settings = {
    filterOne: true
  };
    $scope.settings = {
    filterTwo: true
  };
    $scope.settings = {
    filterThree: true
  };
    $scope.settings = {
    filterFour: true
  };
    $scope.settings = {
    City: true
  };
});
