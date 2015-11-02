// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Login', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    StatusBar.hide();
  });
})

.controller('LoginCtrl', function($scope, $http, $window) {

  $scope.Login = function() {
    console.log("LoginCtrl.Login");
    var Username = $scope.Username;
    var Password = $scope.Password;

    var conf = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      url: 'http://192.168.10.7:8000/auth',
      data: {
        Username: Username,
        Password: Password
      }
    }
    $http(conf).then(function scb(response) {
      console.log(response.data);
      $window.location.href = 'home.html';
    }, function ecb(response) {
      console.log(response.data);
    });
  }

});
